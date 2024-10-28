/* Задача 1. Розробити додаток з такими маршрутами:
season
повертає пору року
day
повертає поточний день
time
повертає час дня (ранок, обід, вечеря)
*/

import express from 'express'
import { getDay, getDaysTime, getSeason } from './services/dateUtils.mjs'

const app = express()
const port = 3000

// Маршрут для GET запиту до кореневого шляху
app.get('/', (req, res) => {
	res.send('Task 1')
})

app.get('/season', (req, res) => {
	res.send(getSeason())
})

app.get('/day', (req, res) => {
	res.send(getDay())
})

app.get('/time', (req, res) => {
	res.send(getDaysTime())
})

// Запуск сервера
app.listen(port, () => {
	console.log(`Сервер запущено на http://localhost:${port}`)
})
