import { Router } from 'express'
import ProductsController from '../controllers/productsController.mjs'

const router = new Router()

router.get('/productsList', ProductsController.mainProducts)

router.get('/add', ProductsController.productFormPageRender)

router.get('/:id', ProductsController.productDetail)

router.post('/', ProductsController.addProduct)

export default router
