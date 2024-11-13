import FormatValidationErrors from '../utils/FormatValidationErrors.mjs'
import UsersDBService from '../models/user/UsersDBService.mjs'
import CountryDBService from '../models/country/CountryDBService.mjs'

class UsersController {
	static async usersList(req, res) {
		try {
			const queryParams = {}
			for (const key in req.query) {
				if (req.query[key]) queryParams[key] = req.query[key]
			}
			const isQuery = Object.keys(req.query).length > 0

			const usersList = await UsersDBService.getList(queryParams)

			res.render('pages/usersList', { usersList, sort: queryParams.sort, isQuery })
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async registerForm(req, res) {
		try {
			const countries = await CountryDBService.getList()

			res.render('pages/register', {
				errors: null,
				user: null,
				countries,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
	static async registerUser(req, res) {
		const user = req.body

		try {
			await UsersDBService.registerUser(user)
			res.redirect('/users')
		} catch (error) {
			const countries = await CountryDBService.getList()
			let errors
			if (error.code === 'EMAIL_EXISTS') {
				errors = { email: error.message }
			} else {
				errors = FormatValidationErrors.formatMongoErrors(error)
			}

			res.status(400).render('pages/register', {
				user,
				errors,
				countries,
			})
		}
	}
	static async deleteUser(req, res) {
		try {
			await UsersDBService.deleteById(req.body.id)
			res.json({ success: true })
		} catch (error) {
			res.status(400).json({ success: false, message: 'Failed to delete user' })
		}
	}
}

export default UsersController
