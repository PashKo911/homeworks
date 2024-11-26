import session from 'express-session'
import config from './default.mjs'

const sessionConfig = session({
	secret: config.secretKey,
	cookie: { maxAge: 1.8e6 },
	resave: false,
	saveUninitialized: false,
})

export default sessionConfig
