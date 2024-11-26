import Product from './Product.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'

class ProductsDBService extends MongooseCRUDManager {}

export default new ProductsDBService(Product)
