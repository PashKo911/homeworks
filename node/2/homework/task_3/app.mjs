/*
Задача 3. Через параметри запиту передають операцію (add, subtract, mult) і числа (розділені дефісами), які треба опрацювати. Знайти результат і повернути користувачу. Наприклад при запиті:
http://localhost:3000/add/12-4-23-45   - треба знайти суму чисел 12,4,23,45
*/

import { createServer } from 'node:http'
import { getSum, getMult, getSub, processRequest, sendResponse } from '../services/functions.mjs'

const server = createServer((req, res) => {
	if (req.url === '/favicon.ico') {
		res.writeHead(204, { 'Content-Type': 'image/x-icon' })
		res.end()
		return
	}

	if (req.url.startsWith('/add')) {
		processRequest(req, res, getSum, 'Sum')
	} else if (req.url.startsWith('/subtract')) {
		processRequest(req, res, getSub, 'Subtract')
	} else if (req.url.startsWith('/mult')) {
		processRequest(req, res, getMult, 'Mult')
	} else {
		sendResponse(res, 404, 'Page not Found')
	}
})

server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
