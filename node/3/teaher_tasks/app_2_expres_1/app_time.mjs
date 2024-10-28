import express from 'express'

const app = express()
const port = 3000
// Маршрут для GET запиту до кореневого шляху
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Розробимо маршрути для отримання потоної години, хвилини, секунди
app.get('/hours', (req, res) => {
  res.send(new Date().getHours().toString())
})
app.get('/minutes', (req, res) => {
  res.send(new Date().getMinutes().toString())
})
app.get('/seconds', (req, res) => {
  res.send(new Date().getSeconds().toString())
})

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`)
})
