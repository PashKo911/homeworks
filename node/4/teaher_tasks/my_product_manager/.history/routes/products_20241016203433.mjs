import ProductsController from '../controllers/productsController.mjs'
import { Router } from 'express'
const router = Router()

//---- обробка шляху '/meals/:age'
router.get('/', ProductsController.mainProducts)
router.get('/:id', ProductsController.productDetail)

router.get('/create', ProductsController.createForm)

export default router
