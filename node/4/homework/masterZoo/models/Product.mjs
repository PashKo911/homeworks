import DataFileManager from '../utils/DataFileManager.mjs'
import { v4 as uuidv4 } from 'uuid'

class Product {
	static async loadProductsList() {
		try {
			return await DataFileManager.loadData()
		} catch (error) {
			throw new Error('Не вдалось заватажити список продуктів')
		}
	}

	static async getProductById(id) {
		try {
			return await DataFileManager.getItemById(id)
		} catch (error) {
			throw new Error(`Операція з даними не пройшла! id: ${id} `)
		}
	}

	static async addProduct(productObj) {
		try {
			await DataFileManager.addItem({ id: uuidv4(), ...productObj })
		} catch (error) {
			throw new Error('Операція з додавання даних не пройшла!')
		}
	}

	static async updateProduct(id, productData) {
		try {
			await DataFileManager.updateItemById(id, productData)
		} catch (error) {
			throw new Error('Оновлення даних не пройшло!')
		}
	}

	static async deleteProductById(id) {
		try {
			await DataFileManager.deleteItemById(id)
		} catch (error) {
			throw new Error('Виникла помилка при видаленні')
		}
	}
}

export default Product
