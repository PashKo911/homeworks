import session from 'express-session'
import config from '../config/default.mjs'

const sessionConfig = session({
  secret: config.session.secretKey,
  resave: false,
  saveUninitialized: false,
})

export default sessionConfig
