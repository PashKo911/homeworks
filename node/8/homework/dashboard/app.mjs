/* 
# rabotapashok
# wZQBjMfMs95WJZ7S
! Трохи видозмінив для себе завдання, хотів з нуля щось інше зробити, 
! Функціонал для першого завдання виконано в формі реєстрації для вибору країн

1)додати до кожного елемента даних у вашому проєкті поле «owner» - де зберігається id 
властника (самі власники зберігається у окремій колекції «owners» (піб власника, адерса)). 
Організувати вибірку даних з відображення інформації про власників у списку елементів даних

2)розмістити базу даних у “Atlas” та пов’язати з здеплоєним проєктом (вказати список валідних IP адрес)
*/

import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { fileURLToPath } from 'url'

import connectDB from './db/connectDB.mjs'

import indexRouter from './routes/index.mjs'
import usersRouter from './routes/users.mjs'

const app = express()
const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

connectDB()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

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
