/*
	Задача 1. Розробити додаток для операцій з товарами (назва, ціна, кількість) з такими маршрутами:
	/products – відображаємо список товарів, 
	/login – при авторизації додаємо до сесії ім’я користувача і переходимо до сторінки «products» 
	(при цьому товари відображаються у порядку зростання ціни),
	/addProduct– додаємо товар і переходимо на сторінку «products» (при цьому товари відображаються 
	у порядку спадання ціни)
	Подумайте як передати інформацію про сортування товарів при переході на сторінку «/products»

	Задача 2. Розробіть веб-додаток для управління курсами та студентами. У базі даних будуть дві основні моделі:
	Course (курс: назва кусу, тривалість, список студентів) та Student (студент: ім’я, вік, середній бал). 
	Кожен курс може мати список студентів (кілька студентів). 
	Курс також може містити масив семінарів, які проводять студенти (кожен семінар є об'єктом з полями: 
	тема семінару, відповідальний студент, тривалість лекції).
*/

import express from 'express'
import session from 'express-session'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { fileURLToPath } from 'url'

import indexRouter from './routes/index.mjs'
import productsRouter from './routes/products.mjs'
import authRouter from './routes/auth.mjs'

import connectDB from './db/connectDB.mjs'

import config from './config/default.mjs'

const app = express()
const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

app.use((req, res, next) => {
	req.__dirname = __dirname
	next()
})

connectDB()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
	session({
		secret: config.secretKey,
		cookie: { maxAge: 1.8e6 },
		resave: false,
		saveUninitialized: false,
	})
)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/products', productsRouter)
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found')
	err.status = 404
	next(err)
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}
	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

export default app
