import * as Joi from 'joi'

export const envValidation = Joi.object({
  // Database
  DATABASE_URL: Joi.string().required(),

  // Redis
  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().default(6379),

  // Server
  PORT: Joi.number().default(5000),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),

  // JWT / SSO
  JWT_ACCESS_COOKIE_NAME: Joi.string().default('access_token'),
  SSO_PUBLIC_KEY_URL: Joi.string().required(),
  SSO_API_URL: Joi.string().required(),

  // Stripe
  STRIPE_SECRET_KEY: Joi.string().required(),
  STRIPE_WEBHOOK_SECRET: Joi.string().required(),

  // App URLs
  APP_URL: Joi.string().default('http://localhost:3002'),
  SSO_URL: Joi.string().required(),

  // Storage (MinIO/S3)
  AWS_ACCESS_KEY_ID: Joi.string(),
  AWS_SECRET_ACCESS_KEY: Joi.string(),
  AWS_S3_ENDPOINT: Joi.string(),
  AWS_S3_BUCKET: Joi.string(),
})