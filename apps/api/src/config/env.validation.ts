import * as Joi from 'joi'

export const envValidation = Joi.object({
  // Database
  DATABASE_URL: Joi.string().required(),

  // Redis
  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().default(6379),

  // Server
  PORT: Joi.number().default(5002),
  NODE_ENV: Joi.string().valid('development', 'production', 'test', 'staging').default('development'),
  CORS_ORIGIN: Joi.string().default('localhost:3002'),

  // API Public URL (for storage proxy)
  API_PUBLIC_URL: Joi.string().required(),

  // SSO Integration (cookie forwarding)
  SSO_API_URL: Joi.string().required(),
  SSO_URL: Joi.string().required(),
  COOKIE_NAME_PREFIX: Joi.string().default('sso-souzs'),

  // Stripe
  STRIPE_SECRET_KEY: Joi.string().optional().allow(''),
  STRIPE_WEBHOOK_SECRET: Joi.string().optional().allow(''),

  // App URLs
  APP_URL: Joi.string().default('http://localhost:3002'),

  // Storage (MinIO/S3/R2)
  AWS_REGION: Joi.string().default('auto'),
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  AWS_S3_ENDPOINT: Joi.string().required(),
  AWS_S3_BUCKET: Joi.string().required(),
})