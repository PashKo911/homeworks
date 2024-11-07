import { checkSchema } from 'express-validator'
import { Router } from 'express'
import ProductsController from '../controllers/productsController.mjs'
import ProductsValidator from '../models/ProductsValidator.mjs'
import upload from '../utils/uploadConfig.mjs'

const router = new Router()

router.get('/productsList', ProductsController.mainProducts)

router.get('/add/:id?', ProductsController.productFormPageRender)
router.get('/:id', ProductsController.productDetail)

router.post(
	'/:id?',
	upload.single('productImg'),
	checkSchema(ProductsValidator.productsSchema),
	ProductsController.addProduct
)

router.delete('/:id', ProductsController.deleteProduct)

export default router
