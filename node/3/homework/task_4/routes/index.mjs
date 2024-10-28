import { Router } from 'express'
import { headerLinks } from '../services/headerLinks.mjs'

const router = Router()
router.get('/', (req, res) => {
	res.render('index', {
		headerLinks,
		title: 'Інтернет магазин зоотоварів',
		task: 'Задача 4. З використанням роутерів та шаблонізаторів розробити інтернет магазин з такими сторінками:',
	})
})
export default router
