import ProductsController from '../controllers/productsController.mjs'
import { Router } from 'express'
const router = Router()

//---- обробка шляху '/meals/:age'
router.get('/', ProductsController.mainProducts)

export default router