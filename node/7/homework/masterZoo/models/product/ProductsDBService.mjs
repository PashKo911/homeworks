import Product from './Product.mjs'
import path from 'path'
import fs from 'fs/promises'

class ProductsDBService {
	static async loadProductsList() {
		try {
			const exists = await Product.checkCollectionExists()
			if (exists) {
				const data = await Product.find().exec()
				return data
			}
			return []
		} catch (error) {
			console.error('Failed to load product list from database:', error.message)
			return []
		}
	}

	static async addProduct(data) {
		const product = new Product(data)
		return await product.save()
	}

	static async getProductById(id) {
		try {
			return await Product.findById(id)
		} catch (error) {
			console.error(`Failed to retrieve product with ID ${id}:`, error.message)
		}
	}

	static async updateProduct(id, data) {
		try {
			return await Product.findByIdAndUpdate(id, data, {
				new: true,
				runValidators: true,
			})
		} catch (error) {
			console.error(`Failed to update product with ID ${id} (data: ${JSON.stringify(data)}):`, error.message)
		}
	}

	static async deleteProductById(id) {
		try {
			return await Product.findByIdAndDelete(id)
		} catch (error) {
			console.error(`Failed to delete product with ID ${id}:`, error.message)
		}
	}

	static async deleteFile(filePath) {
		try {
			await fs.access(filePath)
			await fs.unlink(filePath)
		} catch (error) {
			throw new Error(`Виникла помилка під час видалення файлу файлу ${error.message}`)
		}
	}

	static async deleteOldImage(productId, rootDir) {
		const { imgPath } = await this.getProductById(productId)
		const staticImgPath = path.join(rootDir, 'public/', imgPath)
		await this.deleteFile(staticImgPath)
	}
}

export default ProductsDBService
