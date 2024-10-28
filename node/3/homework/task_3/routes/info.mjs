import { Router } from 'express'

const router = Router()

function getPageName(param) {
	const pages = {
		sites: 'sites',
		films: 'films',
		me: 'me',
	}

	return pages[param] || '404'
}

router.get('/:myLinks', (req, res) => {
	const page = getPageName(req.params['myLinks'])

	res.render(page)
})

export default router
