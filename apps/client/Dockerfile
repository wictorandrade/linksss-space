# syntax=docker.io/docker/dockerfile:1

ARG NODE_VERSION=22-alpine

# Stage 1: Dependencies
FROM node:${NODE_VERSION} AS dependencies

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Stage 2: Build
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json ./
COPY tsconfig.base.json ./
COPY apps/client ./apps/client

ARG NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ARG NEXT_PUBLIC_SSO_URL
ENV NEXT_PUBLIC_SSO_URL=${NEXT_PUBLIC_SSO_URL}
ARG NEXT_PUBLIC_SSO_API_URL
ENV NEXT_PUBLIC_SSO_API_URL=${NEXT_PUBLIC_SSO_API_URL}
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PATH=/app/node_modules/.bin:$PATH

WORKDIR /app/apps/client
RUN npx next build

# Stage 3: Runner
FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder --chown=node:node /app/apps/client/public ./apps/client/public

RUN mkdir -p apps/client/.next && chown node:node apps/client/.next

COPY --from=builder --chown=node:node /app/apps/client/.next/standalone ./
COPY --from=builder --chown=node:node /app/apps/client/.next/static ./apps/client/.next/static

USER node

EXPOSE 3000

CMD ["node", "apps/client/server.js"]