# Souzs SSO — Guia Completo de Integração

Documentação definitiva para integrar qualquer aplicação (NestJS API + Next.js Client, ou Next.js standalone) com o sistema de autenticação centralizado da Souzs.

> Baseado na implementação real do **mypages** (`apps/api` + `apps/client`).

---

## Visão Geral da Arquitetura

```
Browser → Cookie (signed, httpOnly)
       → App Client (Next.js)  ─── /auth/refresh → SSO API
       → App API (NestJS)      ─── /jwks         → SSO API → Redis cache
```

- Autenticação via **cookies signed httpOnly** (não Bearer/Authorization header)
- JWT usa **RS256 assimétrico** — chaves públicas distribuídas via endpoint JWKS do SSO
- O app **não precisa de shared secret**: busca as chaves públicas do SSO e verifica localmente
- Cookie secret (`COOKIE_SECRET`) é **compartilhado** entre SSO e todos os apps do ecossistema

---

## Base URLs

| Ambiente  | SSO API                          | SSO Frontend             |
|-----------|----------------------------------|--------------------------|
| Produção  | `https://api.souzs.com/sso/v1`  | `https://sso.souzs.com`  |
| Dev local | `http://localhost:{PORT}/sso/v1/dev` | `http://localhost:{SSO_PORT}` |

---

## Cookies

O nome dos cookies segue o padrão:
```
{COOKIE_NAME_PREFIX}_access_token
{COOKIE_NAME_PREFIX}_refresh_token
```

| Variável              | Valor no mypages    | Descrição                                |
|-----------------------|---------------------|------------------------------------------|
| `COOKIE_NAME_PREFIX`  | `sso-souzs`         | Prefixo dos cookies — igual em todos apps |
| `COOKIE_SECRET`       | (compartilhado)     | Segredo para verificar assinatura dos cookies — solicitar à equipe Souzs |

> O cookie secret é o **mesmo** em todos os apps do ecossistema e no próprio SSO.

---

## Variáveis de Ambiente

### API (NestJS)

```env
# SSO
SSO_API_URL=https://api.souzs.com/sso/v1   # dev: http://localhost:5000/sso/v1
JWKS_CACHE_TTL=8h                           # TTL do cache das chaves públicas no Redis
SSO_CLIENT_SECRET=<solicitar à equipe Souzs>

# JWT / Cookie
JWT_ALGORITHM=RS256
COOKIE_NAME_PREFIX=sso-souzs
COOKIE_SECRET=<compartilhado com a equipe Souzs>

# CORS
CORS_ORIGIN=meuapp.souzs.com

# Redis (necessário para cache das chaves públicas)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
```

> **Não existe `JWT_SECRET` compartilhado** — a verificação é feita com chaves públicas obtidas do JWKS.

### Client (Next.js)

```env
# App
NEXT_PUBLIC_APP_URL=https://meuapp.souzs.com

# SSO
NEXT_PUBLIC_SSO_URL=https://sso.souzs.com
NEXT_PUBLIC_SSO_API_URL=https://api.souzs.com/sso/v1

# API própria da aplicação
NEXT_PUBLIC_API_BASE_URL=https://api.souzs.com/meuapp/v1

# Cookie (usado no middleware)
COOKIE_NAME_PREFIX=sso-souzs
```

---

## Endpoints SSO Utilizados

| Método | Rota             | Descrição                                           |
|--------|------------------|-----------------------------------------------------|
| `POST` | `/auth/login`    | Login — define cookies access + refresh             |
| `GET`  | `/auth/me`       | Retorna dados do usuário (requer cookie de acesso)  |
| `POST` | `/auth/refresh`  | Renova tokens (usa cookie de refresh)               |
| `POST` | `/auth/logout`   | Limpa cookies                                       |
| `GET`  | `/jwks`          | Lista chaves públicas (JWK Set) para verificação JWT |

---

## UserPayload (shape retornado pelo SSO)

```typescript
interface UserPayload {
  ssoId: string          // UUID do usuário no SSO
  email: string
  displayName: string    // @handle único
  firstName: string
  lastName: string | null
  phone: string          // "(11) 9 9876-5432"
  avatarUrl: string | null
  role: "ADMIN" | "USER"
  iat?: number
  exp?: number
}
```

---

## Implementação — NestJS API

### Dependências

```bash
npm install node-jose @nestjs-modules/ioredis ioredis passport-jwt @nestjs/passport @nestjs/jwt cookie-parser ms axios
```

### 1. Configuração (`app.config.ts`)

```typescript
const cookieNamePrefix = process.env.COOKIE_NAME_PREFIX || 'sso-souzs'

export default () => ({
  cookie: {
    secret: process.env.COOKIE_SECRET,
    domain: process.env.COOKIE_DOMAIN,
    secure: process.env.NODE_ENV === 'production',
  },
  jwt: {
    access: { cookieName: `${cookieNamePrefix}_access_token` },
    refresh: { cookieName: `${cookieNamePrefix}_refresh_token` },
  },
  sso: {
    apiUrl: process.env.SSO_API_URL,          // https://api.souzs.com/sso/v1
    jwksCacheTtl: process.env.JWKS_CACHE_TTL || '8h',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD || '',
    db: parseInt(process.env.REDIS_DB || '0'),
  },
})
```

### 2. PublicKeyHelper — Busca e cache das chaves JWKS

```typescript
// src/common/helpers/public-key.helper.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common'
import * as jose from 'node-jose'
import { InjectRedis } from '@nestjs-modules/ioredis'
import { Redis } from 'ioredis'
import { ConfigService } from '@nestjs/config'
import ms, { StringValue } from 'ms'
import axios from 'axios'

@Injectable()
export class PublicKeyHelper implements OnModuleInit {
  private readonly logger = new Logger(PublicKeyHelper.name)

  constructor(
    @InjectRedis() private readonly redis: Redis,
    private readonly config: ConfigService,
  ) {}

  async onModuleInit(): Promise<void> {
    await this.refreshJWKS()
  }

  async loadPublicKeyFromRedis(kid: string): Promise<string> {
    let pem = await this.redis.get(`jwt:public:${kid}`)
    if (!pem) {
      this.logger.verbose(`kid ${kid} não encontrado no cache, atualizando JWKS`)
      await this.refreshJWKS()
      pem = await this.redis.get(`jwt:public:${kid}`)
      if (!pem) throw new Error(`Chave pública não encontrada para kid: ${kid}`)
    }
    return pem
  }

  async refreshJWKS(): Promise<void> {
    const url = this.config.get<string>('sso.apiUrl')
    const ttl = ms(this.config.get<StringValue>('sso.jwksCacheTtl') || '8h') / 1000

    try {
      const { data } = await axios.get(`${url}/jwks`)
      const jwks = data?.keys
      if (!Array.isArray(jwks)) throw new Error('Formato JWKS inválido')

      const keystore = await jose.JWK.asKeyStore(jwks)
      for (const key of keystore.all()) {
        const pem = key.toPEM(false)
        await this.redis.set(`jwt:public:${key.kid}`, pem, 'EX', ttl)
        this.logger.verbose(`Chave cacheada: kid=${key.kid}, TTL=${ttl}s`)
      }
    } catch (err) {
      this.logger.error(`Falha ao buscar JWKS de ${url}: ${err.message}`)
    }
  }
}
```

**Fluxo:** Na inicialização do módulo (`onModuleInit`), todas as chaves públicas do SSO são buscadas e armazenadas no Redis com TTL de 8h. Quando um token chega com um `kid` desconhecido, o cache é atualizado automaticamente (rotação de chaves).

### 3. JwtHelper — Verificação do token

```typescript
// src/common/helpers/jwt.helper.ts
import { Injectable } from '@nestjs/common'
import { InjectRedis } from '@nestjs-modules/ioredis'
import { Redis } from 'ioredis'
import * as jose from 'node-jose'

@Injectable()
export class JwtHelper {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  decode(token: string): { kid: string } {
    const [headerB64] = token.split('.')
    return JSON.parse(Buffer.from(headerB64, 'base64').toString())
  }

  async verify<T>(token: string): Promise<T> {
    const { kid } = this.decode(token)
    const pem = await this.redis.get(`jwt:public:${kid}`)
    if (!pem) throw new Error(`Chave pública não encontrada para kid: ${kid}`)
    const key = await jose.JWK.asKey(pem, 'pem')
    const result = await jose.JWS.createVerify(key).verify(token)
    return JSON.parse(result.payload.toString()) as T
  }
}
```

### 4. AuthHelper — Extração de cookies

```typescript
// src/core/auth/auth.helper.ts
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request, Response } from 'express'

@Injectable()
export class AuthHelper {
  constructor(private readonly configService: ConfigService) {}

  extractTokenFromCookie(req: Request): string | null {
    const name = this.configService.get<string>('jwt.access.cookieName')
    if (!name) throw new Error('Cookie name não configurado')
    return req.signedCookies?.[name] ?? null
  }

  clearCookies(res: Response): void {
    const opts = {
      httpOnly: true,
      secure: this.configService.get<boolean>('cookie.secure'),
      sameSite: 'lax' as const,
      domain: this.configService.get<string>('cookie.domain'),
      signed: true,
    }
    res.clearCookie(this.configService.get<string>('jwt.access.cookieName')!, opts)
    res.clearCookie(this.configService.get<string>('jwt.refresh.cookieName')!, opts)
  }
}
```

### 5. SSOAuthGuard — Guard global de autenticação

```typescript
// src/core/auth/guards/sso-auth.guard.ts
import { ExecutionContext, Injectable, UnauthorizedException, Logger } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { CanActivate } from '@nestjs/common'
import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator'
import { AuthHelper } from '../auth.helper'
import { JwtHelper } from '@common/helpers/jwt.helper'
import { PublicKeyHelper } from '@common/helpers/public-key.helper'
import { AuthService } from '../auth.service'

@Injectable()
export class SSOAuthGuard implements CanActivate {
  private readonly logger = new Logger(SSOAuthGuard.name)

  constructor(
    private reflector: Reflector,
    private readonly authHelper: AuthHelper,
    private readonly jwtHelper: JwtHelper,
    private readonly publicKeyHelper: PublicKeyHelper,
    private readonly service: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    if (isPublic) return true

    const req = context.switchToHttp().getRequest()
    const token = this.authHelper.extractTokenFromCookie(req)
    if (!token) throw new UnauthorizedException('Token não encontrado')

    try {
      // Decodifica o kid do header do JWT, busca a chave pública no Redis
      const { kid } = this.jwtHelper.decode(token)
      await this.publicKeyHelper.loadPublicKeyFromRedis(kid) // garante que está no Redis

      const payload = await this.jwtHelper.verify<JwtSignedFields>(token)

      let user = await this.service.getUser(payload.email)
      if (!user) user = await this.service.createUser(payload)

      req.user = {
        id: user.id,
        ssoId: payload.ssoId,
        email: payload.email,
        name: payload.displayName || payload.firstName,
        role: payload.role,
      }
      return true
    } catch (e) {
      this.logger.error('Falha na verificação do token:', e.message)
      throw new UnauthorizedException()
    }
  }
}
```

### 6. Decoradores

```typescript
// src/core/auth/decorators/is-public.decorator.ts
import { SetMetadata } from '@nestjs/common'
export const IS_PUBLIC_KEY = 'isPublic'
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true)

// src/core/auth/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().user
)
```

### 7. AuthModule

```typescript
// src/core/auth/auth.module.ts
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { SSOAuthGuard } from './guards/sso-auth.guard'
import { AuthHelper } from './auth.helper'
import { AuthService } from './auth.service'
import { CommonModule } from '@common/common.module' // exporta JwtHelper, PublicKeyHelper

@Module({
  imports: [CommonModule],
  providers: [
    AuthService,
    AuthHelper,
    { provide: APP_GUARD, useClass: SSOAuthGuard },
  ],
  exports: [AuthService, AuthHelper],
})
export class AuthModule {}
```

```typescript
// src/common/common.module.ts
import { Module } from '@nestjs/common'
import { JwtHelper } from './helpers/jwt.helper'
import { PublicKeyHelper } from './helpers/public-key.helper'

@Module({
  providers: [JwtHelper, PublicKeyHelper],
  exports: [JwtHelper, PublicKeyHelper],
})
export class CommonModule {}
```

### 8. main.ts — CORS e Cookie Parser

```typescript
import cookieParser from 'cookie-parser'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  app.enableCors({ origin: true, credentials: true })
  app.use(cookieParser(configService.get<string>('cookie.secret')))

  await app.listen(configService.get<number>('port') || 3000)
}
```

---

## Implementação — Next.js Client

### 1. Middleware — Refresh automático e redirect para SSO

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const prefix = process.env.COOKIE_NAME_PREFIX        // sso-souzs
  const accessCookie = `${prefix}_access_token`
  const refreshCookie = `${prefix}_refresh_token`

  const ssoUrl = process.env.NEXT_PUBLIC_SSO_URL       // https://sso.souzs.com
  const appUrl = process.env.NEXT_PUBLIC_APP_URL        // https://meuapp.souzs.com
  const ssoApiUrl = process.env.NEXT_PUBLIC_SSO_API_URL // https://api.souzs.com/sso/v1

  const hasRefresh = req.cookies.has(refreshCookie)
  const hasAccess = req.cookies.has(accessCookie)

  // Sem refresh token → redireciona para SSO (login)
  if (!hasRefresh) {
    return NextResponse.redirect(`${ssoUrl}?redirect_uri=${appUrl}`)
  }

  // Tem refresh mas não tem access → tenta renovar
  if (!hasAccess) {
    try {
      const refreshRes = await fetch(`${ssoApiUrl}/auth/refresh`, {
        method: 'POST',
        headers: { Cookie: req.cookies.toString() },
        cache: 'no-store',
      })

      if (refreshRes.ok) {
        const response = NextResponse.next()
        refreshRes.headers.getSetCookie().forEach((cookie) => {
          response.headers.append('Set-Cookie', cookie)
        })
        return response
      }
    } catch {}

    return NextResponse.redirect(`${ssoUrl}?redirect_uri=${appUrl}`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.svg$).*)'],
}
```

### 2. Server-side auth helper

```typescript
// src/lib/server-auth.ts
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getServerUser() {
  const cookieStore = await cookies()
  const cookieHeader = cookieStore.getAll().map(c => `${c.name}=${c.value}`).join('; ')

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
      headers: { Cookie: cookieHeader },
      cache: 'no-store',
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function requireAuth() {
  const user = await getServerUser()
  if (!user) {
    redirect(`${process.env.NEXT_PUBLIC_SSO_URL}?redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}`)
  }
  return user
}
```

### 3. Axios client com retry automático

```typescript
// src/utils/api.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

const ssoApi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SSO_API_URL,
  withCredentials: true,
})

let isRefreshing = false
let failedQueue: { resolve: Function; reject: Function }[] = []

const processQueue = (error: unknown) => {
  failedQueue.forEach(({ resolve, reject }) => (error ? reject(error) : resolve(null)))
  failedQueue = []
}

api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as AxiosRequestConfig & { _retry?: boolean }

    if (error.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => failedQueue.push({ resolve, reject }))
          .then(() => api(original))
      }

      original._retry = true
      isRefreshing = true

      try {
        await ssoApi.post('/auth/refresh')
        processQueue(null)
        return api(original)
      } catch (err) {
        processQueue(err)
        const ssoUrl = process.env.NEXT_PUBLIC_SSO_URL
        const appUrl = process.env.NEXT_PUBLIC_APP_URL
        window.location.href = `${ssoUrl}?redirect_uri=${appUrl}`
        return new Promise(() => {})
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default api
```

---

## Opção: Next.js standalone (sem API NestJS separada)

Para apps Next.js que **não têm uma API NestJS própria**, a validação de sessão é feita chamando `/auth/me` diretamente no SSO (sem verificação local de JWT):

```typescript
// src/lib/server-auth.ts
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function requireAuth() {
  const cookieStore = await cookies()
  const cookieHeader = cookieStore.getAll().map(c => `${c.name}=${c.value}`).join('; ')

  const res = await fetch(`${process.env.SSO_API_URL}/auth/me`, {
    headers: { Cookie: cookieHeader },
    cache: 'no-store',
  })

  if (!res.ok) {
    redirect(`${process.env.NEXT_PUBLIC_SSO_URL}?redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}`)
  }

  return res.json()
}
```

> Neste caso não é necessário Redis, node-jose ou qualquer configuração de JWKS.

---

## Fluxo Completo de Autenticação

```
1. Usuário não autenticado → middleware detecta ausência de cookie
2. Redirect: https://sso.souzs.com?redirect_uri=https://meuapp.souzs.com
3. SSO faz login → define sso-souzs_access_token + sso-souzs_refresh_token (httpOnly, signed)
4. SSO redireciona de volta para redirect_uri
5. App recebe request com cookies → middleware valida → acesso liberado

Renovação automática:
6. access_token expirado → middleware chama POST /auth/refresh
7. Novos cookies definidos → request prossegue transparentemente

No NestJS (SSOAuthGuard):
8. Token extraído do cookie signed
9. kid extraído do header JWT
10. Chave pública buscada no Redis (ou atualizada via GET /jwks)
11. JWT verificado localmente com node-jose
12. Usuário criado/encontrado no DB local → req.user preenchido
```

---

## Checklist de Integração

### NestJS API
- [ ] Instalar: `node-jose`, `@nestjs-modules/ioredis`, `cookie-parser`, `ms`, `passport-jwt`
- [ ] Configurar Redis (usado para cache das chaves públicas)
- [ ] Definir `SSO_API_URL`, `JWKS_CACHE_TTL`, `COOKIE_NAME_PREFIX`, `COOKIE_SECRET`
- [ ] Implementar `PublicKeyHelper` com `onModuleInit` para carregar JWKS
- [ ] Implementar `JwtHelper.verify()` usando chaves do Redis
- [ ] Registrar `SSOAuthGuard` como `APP_GUARD` global
- [ ] Usar `@IsPublic()` em rotas públicas
- [ ] Configurar `cookieParser(cookieSecret)` no `main.ts`
- [ ] CORS com `origin: true, credentials: true`

### Next.js Client
- [ ] Definir `NEXT_PUBLIC_SSO_URL`, `NEXT_PUBLIC_SSO_API_URL`, `NEXT_PUBLIC_APP_URL`, `COOKIE_NAME_PREFIX`
- [ ] Implementar `middleware.ts` com check de cookies e refresh automático
- [ ] Axios com `withCredentials: true` e interceptor de 401 → refresh → redirect
- [ ] `requireAuth()` server-side para Server Components protegidos
- [ ] Redirecionar para `{SSO_URL}?redirect_uri={APP_URL}` em erros de auth

---

## Avatars e Storage

O SSO serve avatars de usuários através de um endpoint público, permitindo carregar imagens via `<img>` sem autenticação.

### Rota Pública

```
GET /storage/avatars/{displayName}.png
```

- **Pública** — não requer cookies/tokens
- **Formato**: PNG (convertido automaticamente no upload)
- **Nome**: `{displayName}.png` (ex: `admin.png`, `joao-silva.png`)
- **Cache**: `Cache-Control: public, max-age=3600`

### Como Exibir Avatars no Frontend

O `avatarUrl` retornado pelo SSO (`/auth/me`) já contém a URL completa. Basta usar diretamente:

```tsx
// Exemplo React/Next.js
<Avatar>
  <AvatarImage src={user.avatarUrl} alt="Avatar" />
  <AvatarFallback>{initials}</AvatarFallback>
</Avatar>
```

Se `avatarUrl` for null, exibir fallback com iniciais do nome.

### Upload de Avatar (SSO interno)

O upload no SSO:
1. Converte qualquer formato para PNG (`sharp`)
2. Salva como `avatars/{displayName}.png`
3. Atualiza `avatarUrl` no banco
4. Reemite tokens JWT com novo `avatarUrl`

> Apps externos não fazem upload de avatar — isso é exclusivo do SSO. Apps podem apenas exibir.

### Storage Privado

Demais arquivos (`/storage/*` exceto `/storage/avatars/*`) requerem autenticação:
- Acessados via cookie signed
- Usados para documentos, uploads privados, etc.

---

## Segurança

| Ponto                    | Detalhe                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| Cookies                  | `httpOnly`, `signed`, `sameSite: lax` — inacessíveis ao JavaScript     |
| JWT algorithm            | RS256 — assimétrico, chave privada nunca sai do SSO                     |
| Rotação de refresh token | Cada uso invalida o token anterior (blacklist no Redis do SSO)          |
| Rotação de chaves        | SSO rota chaves dinamicamente — apps atualizam automaticamente via JWKS |
| COOKIE_SECRET            | Compartilhado — solicitar à equipe Souzs, não expor em repositórios     |
| redirect_uri             | Deve pertencer a `.souzs.com` ou domínio cadastrado na Application      |

---

*Documento gerado em: 2026-03-27 | Baseado na implementação: mypages/apps/api + mypages/apps/client*