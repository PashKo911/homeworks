/* 
	Задача 2. Розробити серверну частину додатку, 
	який за відповідними маршрутами (“/”, “/coffee”, “/music”) 
	повертає створені HTML документи.
*/

import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const port = 3000

const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)
const pathToStaticFiles = path.join(__dirName, 'public')

// Маршрут для GET запиту до кореневого шляху
app.get('/', (req, res) => {
	res.sendFile(path.join(pathToStaticFiles, 'index.html'))
})

app.get('/coffee', (req, res) => {
	res.sendFile(path.join(pathToStaticFiles, 'coffee.html'))
})

app.get('/music', (req, res) => {
	res.sendFile(path.join(pathToStaticFiles, 'music.html'))
})

// Запуск сервера
app.listen(port, () => {
	console.log(`Сервер запущено на http://localhost:${port}`)
})
