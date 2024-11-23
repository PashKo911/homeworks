import Product from './Product.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'

class ProductsDBService extends MongooseCRUDManager {
	static async getList(filters, projection, options) {
		try {
			const res = await super.getList(filters, projection, options)
			return res
		} catch (error) {
			return []
		}
	}
}

export default new ProductsDBService(Product)
