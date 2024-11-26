import express from 'express'
import UsersController from '../controllers/usersController.mjs'

const router = express.Router()

router.get('/', UsersController.usersList)

router.get('/:id', UsersController.editUserForm)
router.post('/:id', UsersController.updateType)

router.delete('/', UsersController.deleteUser)

export default router
