import MainController from '../controllers/mainController.mjs'
import { Router } from 'express'
const router = Router()

//---- обробка шляху '/meals/:age'
router.get('/meals/:age', MainController.mealSelector)

//---- обробка шляху '/'
router.get('/', MainController.info)

export default router
