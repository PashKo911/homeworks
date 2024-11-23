import { Router } from 'express'
import { checkSchema } from 'express-validator'

import UserValidator from '../validators/userValidator.mjs'
import AuthController from '../controllers/authController.mjs'

const router = new Router()

router.get('/login', AuthController.loginFormRender)

router.post('/login', checkSchema(UserValidator.userSchema), AuthController.authUser)

router.get('/logout', AuthController.logoutUser)

export default router
