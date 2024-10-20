/* Задача 2. Користувач через роут ‘/save_num/число’ може передати на сервер якесь число. Ці числа поступово треба зберігати у текстовому файлі numbers.txt. Наприклад, використовуючи такий роут:
http://localhost:3000/save_num/78  -  у файл треба додати число 78.
А використовуючи роути  ‘/sum’ – знайти суму, ‘mult’ –знайти добуток. За роутом «/remove» файл треба видалити.
*/

import { createServer } from 'node:http'
import { saveNum, getSumFromFile, getMultFromFile, removeFile, sendResponse } from '../services/functions.mjs'

const server = createServer((req, res) => {
	const numbersFilePath = 'save_num.txt'

	if (req.url === '/favicon.ico') {
		res.writeHead(204, { 'Content-Type': 'image/x-icon' })
		res.end()
		return
	}
	if (req.url.startsWith('/save_num')) {
		saveNum(res, req.url, numbersFilePath)
	} else if (req.url === '/sum') {
		getSumFromFile(res, numbersFilePath)
	} else if (req.url === '/mult') {
		getMultFromFile(res, numbersFilePath)
	} else if (req.url === '/remove') {
		removeFile(res, numbersFilePath)
	} else {
		sendResponse(res, 404, 'Page not Found')
	}
})

server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
