// function makeResponse(url) {
// 	if (url === '/ok') return 'Все добре!\n'
// 	else if (url === '/hello') return 'Привіт!\n'
// 	else return 'Вітаємо на сайті! \n'
// }

// function run() {
// 	console.log('Привіт з Helper')
// }

// // Сучасний метод
// const isMainModule = require.main === module

// // Застарілий метод
// // const isMainModule = !module.parent

// if (isMainModule) run()
// else {
// 	module.exports = makeResponse
// 	console.log(require.main)
// }

// Перевірка чи цей модуль підключається чи запускається ES6 сучасний метод

import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function makeResponse(url) {
	if (url === '/ok') return 'Changed! \n'
	else if (url === '/hello') return 'Hello\n'
	else return 'Hello in the website!\n'
}

function run() {
	console.log('Привіт з Helper')
}
const isMainModule = path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isMainModule) {
	run()
}
