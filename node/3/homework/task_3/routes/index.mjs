import { Router } from 'express'

const router = Router()
router.get('/', (req, res) => {
	res.render('index', { title: 'Task_3', teacherName: 'Andrii' })
})

router.get('/goals', (req, res) => {
	res.render('goals')
})
export default router
