import express from 'express'
import ProductsController from '../controllers/productsController.mjs'
import { checkSchema } from 'express-validator'
import ProductValidator from '../validators/productValidator.mjs'

const router = express.Router()

router.get('/', ProductsController.productsList)

router.get('/addProduct/:id?', ProductsController.productFormRender)
router.post('/addProduct/:id?', checkSchema(ProductValidator.productSchema), ProductsController.addProduct)

router.delete('/', ProductsController.deleteProduct)

export default router
