import { Router } from 'express'
import ProductsController from '../controllers/productsController.mjs'

const router = new Router()

router.get('/productsList', ProductsController.mainProducts)

router.get('/add', ProductsController.productFormPageRender)
router.get('/edit/:id', ProductsController.editForm)

router.get('/:id', ProductsController.productDetail)

router.post('/:id', ProductsController.updateProduct)
router.post('/', ProductsController.addProduct)

router.delete('/:id', ProductsController.deleteProduct)

export default router
