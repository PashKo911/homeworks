import dotenv from 'dotenv'
dotenv.config()

export default Object.freeze({
  general: {
    port: process.env.PORT,
  },
  session: {
    secretKey: process.env.SESSION_KEY,
  },
  token: {
    secretTokenKey: process.env.TOKEN_KEY,
    expiredTime: process.env.EXPIRE_PERIOD,
  },
  database: {
    databaseName: process.env.DATABASE_NAME,
    databaseUrl: process.env.MONGODB_URL,
    mongoURI: `${process.env.MONGODB_URL}${process.env.DATABASE_NAME}`,
  },
})
