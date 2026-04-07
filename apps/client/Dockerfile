# Linksss Space Client
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/client/package*.json ./apps/client/

# Install dependencies
RUN npm ci

# Copy source
COPY apps/client ./apps/client
COPY tsconfig.json ./
COPY nx.json ./

# Build
WORKDIR /app/apps/client
RUN npm run build

# Production image
FROM node:22-alpine AS runner

WORKDIR /app

# Copy built files
COPY --from=builder /app/apps/client/.next/standalone ./
COPY --from=builder /app/apps/client/.next/static ./.next/static
COPY --from=builder /app/apps/client/public ./public

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]