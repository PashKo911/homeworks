import { Router } from 'express'
import MainController from '../controllers/mainController.mjs'

const router = Router()

router.get('/', MainController.home)

router.get('/about', MainController.about)

export default router
