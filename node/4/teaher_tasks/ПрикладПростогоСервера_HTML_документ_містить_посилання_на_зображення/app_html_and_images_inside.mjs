// приклад сервера, що може обслуговувати виведення HTML із зображеннями всередині (тобто сервер обслуговує надсилання не тільки HTML файлів, а й запити за зображеннямм)
// ======================
import http from 'http' // Імпортуємо модуль http для створення сервера
import fs from 'fs' // Імпортуємо модуль fs для роботи з файловою системою
import path from 'path' // Імпортуємо модуль path для роботи зі шляхами
import url from 'url' // Імпортуємо модуль url для розбору URL

const port = 3000 // Встановлюємо порт для сервера

http
  .createServer((req, res) => {
    console.log('---- req.url ----')
    console.log(req.url)

    // Створюємо сервер
    const parsedUrl = url.parse(req.url) // Розбираємо URL запиту
    let pathname = `.${parsedUrl.pathname}` // Формуємо шлях до файлу

    const ext = path.parse(pathname).ext // Визначаємо розширення файлу
    const map = {
      // Карта MIME типів
      '.ico': 'image/x-icon',
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.wav': 'audio/wav',
      '.mp3': 'audio/mpeg',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
      '.doc': 'application/msword',
    }

    if (!fs.existsSync(pathname)) {
      // Якщо файл не існує
      res.statusCode = 404 // Встановлюємо статус відповіді 404
      res.end(`File ${pathname} not found!`) // Відправляємо відповідь клієнту
      return
    }

    console.log(pathname)

    fs.readFile(pathname, (err, data) => {
      // Читаємо файл з диска
      if (err) {
        // Якщо виникла помилка при зчитуванні файлу
        res.statusCode = 500 // Встановлюємо статус відповіді 500
        res.end(`Error getting the file: ${err}.`) // Відправляємо відповідь клієнту
      } else {
        res.setHeader('Content-type', map[ext] || 'text/plain') // Встановлюємо заголовок відповіді
        res.end(data) // Відправляємо файл як відповідь
      }
    })
  })
  .listen(port, () => {
    // Встановлюємо сервер на прослуховування заданого порту
    console.log(`Server listening on port ${port}`) // Виводимо повідомлення про успішний запуск сервера
  })
