/*
Задача 5. Створити додаток з історією. У файлі json зберігаємо усі роути та кількість відвідувань. 
У налаштуваннях settings.json зберігати який роут треба використати для перегляду 
історії та назву файлу де зберігається історія
*/

import { createServer } from 'node:http'
import settingsData from './settings.json' assert { type: 'json' }
import { showHistory, updateHistory } from '../services/functions.mjs'

const server = createServer(async (req, res) => {
	if (req.url === '/favicon.ico') {
		res.writeHead(204, { 'Content-Type': 'image/x-icon' })
		res.end()
		return
	}

	const { historyFilePath, historyRoute } = settingsData

	if (req.url === historyRoute) {
		await showHistory(res, historyFilePath)
	} else {
		await updateHistory(req, res, historyFilePath)
	}
})

server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
