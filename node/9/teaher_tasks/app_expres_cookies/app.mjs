import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
app.use(cookieParser())

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser('My Top Secret String'))

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory
// Додаємо статичну папку
app.use(express.static(path.join(__dirname, 'public')))

//---------------- login------------------------------------
app.post('/login', function (req, res) {
  console.log('---- req')
  console.log(req.body)

  res.cookie('userName', req.body.username, { maxAge: 3000 }) // Встановлення значення
  res.redirect('/')
})
//----------------- Зчитування -------------------------------
app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  if (req.cookies.userName)
    res.send('Hello ' + req.cookies.userName) // Зчитування параметра
  else res.redirect('loginForm.html')
})

//----------------- logout -----------------------------------
app.get('/logout', function (req, res) {
  if (req.cookies.userName) {
    res.clearCookie('userName') //  Видалення куки
  }
  res.redirect('/')
})

// Запуск сервера
const port = 3000
app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`)
})
