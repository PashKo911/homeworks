import fs from 'fs/promises'
import settings from '../settings.mjs'

class DataFileManager {
	constructor(filePath) {
		this.filePath = filePath
	}

	async saveData(dataArray) {
		try {
			await fs.writeFile(this.filePath, JSON.stringify(dataArray), 'utf-8')
		} catch (error) {
			throw new Error(`Помилка при збереженні данних: ${error.message}`)
		}
	}

	async loadData() {
		try {
			const data = await fs.readFile(this.filePath, 'utf-8')
			return JSON.parse(data)
		} catch (error) {
			if (error.code === 'ENOENT') {
				await this.saveData([])
				return []
			} else {
				throw new Error(`Помилка при завантаженні даних: ${error.message}`)
			}
		}
	}

	async addItem(item) {
		try {
			if (!item) {
				throw new Error('Обʼєкт не передано')
			}
			const data = await this.loadData()
			data.push(item)
			await this.saveData(data)
		} catch (error) {
			throw new Error(`Помилка при додаванні обʼєкту: ${error.message}`)
		}
	}

	async getItemById(id) {
		try {
			if (!id) {
				throw new Error('ID не передано')
			}
			const data = await this.loadData()
			const item = data.find((item) => item.id === id)
			if (!item) {
				throw new Error(`Обʼєкт з id: ${id} не знайдено`)
			}
			return item
		} catch (error) {
			throw new Error(`Помилка при пошуку обʼєкта: ${error.message}`)
		}
	}

	async updateItemById(id, updatedProperties) {
		try {
			if (!id) {
				throw new Error('ID не передано')
			}
			const data = await this.loadData()
			const index = data.findIndex((item) => item.id === id)
			if (index !== -1) {
				data[index] = { ...data[index], ...updatedProperties }
				await this.saveData(data)
				return true
			} else {
				throw new Error(`Об'єкт з id ${id} не знайдено`)
			}
		} catch (error) {
			throw new Error(`Помилка при оновленні об'єкта: ${error.message}`)
		}
	}

	async deleteItemById(id) {
		try {
			if (!id) {
				throw new Error('ID не передано')
			}
			const data = await this.loadData()
			const newData = data.filter((item) => item.id !== id)

			if (data.length === newData.length) {
				throw new Error(`Об'єкт з id ${id} не знайдено`)
			}

			await this.saveData(newData)
		} catch (error) {
			throw new Error(`Помилка при видаленні об'єкта: ${error.message}`)
		}
	}
	async deleteFile(filePath) {
		try {
			await fs.access(filePath)
			await fs.unlink(filePath)
		} catch (error) {
			throw new Error(`Виникла помилка під час видалення файлу файлу ${error.message}`)
		}
	}
}

export default new DataFileManager(settings.dataPath)
