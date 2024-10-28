import { Router } from 'express'
import { headerLinks } from '../services/headerLinks.mjs'
import { productsList } from '../services/productsList.mjs'

const task =
	'Задача 4. З використанням роутерів та шаблонізаторів розробити інтернет магазин з такими сторінками:'

const router = Router()
router.get('/', (req, res) => {
	res.render('products', {
		productsList,
		headerLinks,
		title: 'Інтернет магазин зоотоварів',
		task,
	})
})
router.get('/add', (req, res) => {
	res.render('addProductForm', {
		headerLinks,
		task,
	})
})
export default router
