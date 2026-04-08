# syntax=docker.io/docker/dockerfile:1
FROM node:22-alpine AS base

# ─── Stage 1: Dependências ───────────────────────────────────────────────────
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/api/package.json ./apps/api/
COPY apps/client/package.json ./apps/client/
RUN npm ci

# ─── Stage 2: Build ──────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY apps/api ./apps/api
WORKDIR /app/apps/api
ENV DATABASE_URL="postgresql://build:build@localhost:5432/build"
RUN npx prisma generate && npm run build

# ─── Stage 3: Runtime ────────────────────────────────────────────────────────
FROM base AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/generated ./generated
COPY --from=builder /app/apps/api/prisma ./prisma
COPY --from=builder /app/apps/api/package.json ./package.json

EXPOSE 5000

CMD ["node", "dist/main.js"]