import express from 'express'

import authRoutes from './authRoutes.mjs'
import usersTypesRoutes from './usersTypesRoutes.mjs'
import userRoutes from './userRoutes.mjs'
import productRoutes from './productRoutes.mjs'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/users_types', usersTypesRoutes)
router.use('/users', userRoutes)
router.use('/products', productRoutes)

export default router
