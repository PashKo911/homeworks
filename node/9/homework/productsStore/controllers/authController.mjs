import { validationResult } from 'express-validator'
import FormatValidationErrors from '../validators/formatValidationErrors.mjs'

class AuthController {
	static loginFormRender(req, res) {
		try {
			if (req.session.user) return res.redirect('../products')
			res.render('general/generalEditForm', {
				pageTitle: 'Login',
				headerTitle: 'Login',
				fields: [
					{ name: 'email', type: 'email', required: true, label: 'Email' },
					{ name: 'password', type: 'password', required: true, label: 'Password' },
				],
				initialValues: {},
				errors: [],
				submitUrl: '/auth/login',
				redirectUrl: '/products?sortBy=1',
				user: req.session.user,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static authUser(req, res) {
		const { email, password } = req.body
		const expressErrors = validationResult(req)

		if (!expressErrors.isEmpty()) {
			const errors = FormatValidationErrors.formatExpressErrors(expressErrors)
			return res.status(400).json({ errors })
		}

		req.session.user = { email, password }
		res.redirect('/products')
	}

	static logoutUser(req, res) {
		try {
			req.session.destroy((err) => {
				if (err) {
					return res.status(500).json({ error: err.message })
				}
				res.redirect('/auth/login')
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
}

export default AuthController
