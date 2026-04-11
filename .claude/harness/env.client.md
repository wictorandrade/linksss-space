# Variáveis de Ambiente — Client (Next.js)

Preencher antes de iniciar desenvolvimento. Arquivo real: `apps/client/.env.local`

```env
# =============================================
# APP
# =============================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=linksss.space

# =============================================
# API PRÓPRIA
# =============================================
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1

# =============================================
# SSO (Souzs)
# =============================================
NEXT_PUBLIC_SSO_URL=http://localhost:4000
# prod: https://sso.souzs.com

NEXT_PUBLIC_SSO_API_URL=http://localhost:5000/sso/v1
# prod: https://api.souzs.com/sso/v1

# Cookie prefix — deve ser igual ao do SSO e da API
COOKIE_NAME_PREFIX=sso-souzs

# =============================================
# STRIPE (public key apenas)
# =============================================
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# =============================================
# ANALYTICS / PIXELS (configurados por perfil, mas keys globais aqui)
# =============================================
# Estes são os pixels do próprio app (não dos usuários)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...

# =============================================
# FEATURE FLAGS (preencher conforme avançar)
# =============================================
NEXT_PUBLIC_FF_AI_SUGGESTIONS=false
NEXT_PUBLIC_FF_CUSTOM_DOMAIN=false
NEXT_PUBLIC_FF_HEATMAP=false
```