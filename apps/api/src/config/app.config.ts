export default () => ({
  nodeEnv: process.env.NODE_ENV,
  isDev: process.env.NODE_ENV === 'development',
  port: process.env.PORT,
  corsOrigin: String(process.env.CORS_ORIGIN).split(','),
  ssoApiUrl: process.env.SSO_API_URL,
  ssoUrl: process.env.SSO_URL,
  appUrl: process.env.APP_URL,
  cookie: {
    namePrefix: process.env.COOKIE_NAME_PREFIX || 'linksss',
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    db: process.env.REDIS_DB,
  },
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3: {
      bucket: process.env.AWS_S3_BUCKET,
      endpoint: process.env.AWS_S3_ENDPOINT,
    },
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
})