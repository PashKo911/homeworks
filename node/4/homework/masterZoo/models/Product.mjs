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
			throw new Error('Операція з даними не пройшла!')
		}
	}

	static async addProduct(productObj) {
		try {
			await DataFileManager.addItem({ id: uuidv4(), ...productObj })
		} catch (error) {
			throw new Error('Операція з додавання даних не пройшла!')
		}
	}
}

export default Product
