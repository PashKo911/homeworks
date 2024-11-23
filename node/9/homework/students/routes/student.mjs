import express from 'express'
import { checkSchema } from 'express-validator'
import StudentValidator from '../validators/studentValidator.mjs'
import StudentController from '../controllers/studentsController.mjs'

const router = express.Router()

router.get('/', StudentController.studentsList)

router.get('/addStudent/:id?', StudentController.studentsFormRender)
router.post('/addStudent/:id?', checkSchema(StudentValidator.studentSchema), StudentController.addStudent)

router.delete('/', StudentController.deleteStudent)

export default router
