import { Router } from 'express'

const router = new Router()
router.get('/', (req, res) => {
	res.render('index', { pageTitle: 'HW 9', user: req.session.user })
})

export default router
