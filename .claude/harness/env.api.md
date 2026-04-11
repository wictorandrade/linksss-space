# Variáveis de Ambiente — API (NestJS)

Preencher antes de iniciar desenvolvimento. Arquivo real: `apps/api/.env`

```env
# =============================================
# APP
# =============================================
NODE_ENV=development
PORT=3001

# =============================================
# DATABASE
# =============================================
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/linksss_dev

# =============================================
# SSO (Souzs)
# =============================================
SSO_API_URL=http://localhost:5000/sso/v1
# prod: https://api.souzs.com/sso/v1

JWKS_CACHE_TTL=8h
SSO_CLIENT_SECRET=         # solicitar à equipe Souzs

JWT_ALGORITHM=RS256
COOKIE_NAME_PREFIX=sso-souzs
COOKIE_SECRET=             # compartilhado — solicitar à equipe Souzs
COOKIE_DOMAIN=localhost

# =============================================
# REDIS (cache de chaves públicas JWKS)
# =============================================
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# =============================================
# CORS
# =============================================
CORS_ORIGIN=http://localhost:3000

# =============================================
# STRIPE
# =============================================
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID_PRO_MONTHLY=price_...
STRIPE_PRICE_ID_PRO_ANNUAL=price_...
STRIPE_PRICE_ID_BUSINESS_MONTHLY=price_...
STRIPE_PRICE_ID_BUSINESS_ANNUAL=price_...

# =============================================
# STORAGE (uploads — S3 compatible)
# =============================================
STORAGE_BUCKET=
STORAGE_REGION=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
STORAGE_ENDPOINT=          # para MinIO local ou R2

# =============================================
# EMAIL (opcional por ora)
# =============================================
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
EMAIL_FROM=noreply@linksss.space
```