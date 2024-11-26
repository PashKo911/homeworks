import express from 'express'
import ProductsController from '../controllers/productsController.mjs'
import { checkSchema } from 'express-validator'
import ProductValidator from '../validators/productValidator.mjs'
import { ensureManagerAndAdmin } from '../middleware/auth.mjs'

const router = express.Router()

router.get('/', ProductsController.productsList)

router.get('/addProduct/:id?', ensureManagerAndAdmin, ProductsController.productFormRender)
router.post(
	'/addProduct/:id?',
	ensureManagerAndAdmin,
	checkSchema(ProductValidator.productSchema),
	ProductsController.addProduct
)

router.delete('/', ensureManagerAndAdmin, ProductsController.deleteProduct)

export default router
