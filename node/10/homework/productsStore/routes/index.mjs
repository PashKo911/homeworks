import { Router } from 'express'
import homeRoutes from './home.mjs'
import productsRoutes from './products.mjs'
import authRoutes from './auth.mjs'
import usersRouter from './users.mjs'
import { ensureAdmin, ensureManager } from '../middleware/auth.mjs'

const router = new Router()

router.use('/', homeRoutes)
router.use('/products', productsRoutes)
router.use('/users', ensureAdmin, usersRouter)
router.use('/auth', authRoutes)

export default router
