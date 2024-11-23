import express from 'express'
import CoursesController from '../controllers/coursesController.mjs'

const router = express.Router()

router.get('/', CoursesController.coursesList)

router.get('/addCourse/:id?', CoursesController.coursesFormRender)
router.post('/addCourse/:id?', CoursesController.addCourse)

router.delete('/', CoursesController.deleteCourse)

router.get('/seminar/addSeminar/:id/:seminarId?', CoursesController.seminarFormRender)
router.post('/seminar/addSeminar/:id/:seminarId?', CoursesController.addSeminar)

router.delete('/seminar/:id', CoursesController.deleteSeminar)

export default router
