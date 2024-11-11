import { Router } from 'express'
import UsersController from '../controllers/UsersController.mjs'

const router = Router()
router.get('/', UsersController.usersList)

router.get('/register/:id?', UsersController.registerForm)
router.post('/register/:id?', UsersController.registerUser)

router.delete('/', UsersController.deleteUser)

export default router
