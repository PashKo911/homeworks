/*
Задача 4. Розробити серверну частину додатку, який за відповідними 
маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи (розмістіть їх там же, де і додаток), 
що описують: інформацію про себе, інфорімацію про улюблену кав’ярню,  інформацію про улюблений музичний гурт.
*/

import { createServer } from 'node:http'
import { readFile } from '../services/functions.mjs'

const server = createServer((req, res) => {
	if (req.url === '/favicon.ico') {
		res.writeHead(204, { 'Content-Type': 'image/x-icon' })
		res.end()
		return
	}

	const path = req.url === '/' ? 'index.html' : req.url.slice(1) + '.html'

	readFile(res, path).then((data) => {
		res.end(data)
	})
})

server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
