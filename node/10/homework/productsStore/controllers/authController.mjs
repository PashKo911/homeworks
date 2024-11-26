import passport from 'passport'
import { validationResult } from 'express-validator'
import FormatValidationErrors from '../validators/formatValidationErrors.mjs'
import UsersDBService from '../models/user/UsersDBService.mjs'

class AuthController {
	static loginFormRender(req, res) {
		try {
			if (req.user) return res.redirect('../products')
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
				redirectUrl: '/products',
				user: req.user,
				isSignup: true,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static authUser(req, res, next) {
		const expressErrors = validationResult(req)

		if (!expressErrors.isEmpty()) {
			const errors = FormatValidationErrors.formatExpressErrors(expressErrors)
			return res.status(400).json({ errors })
		}

		passport.authenticate('local', (err, user, info) => {
			if (err) return next(err)
			if (!user) return res.status(400).json({ errors: [{ message: info.message }] })

			req.logIn(user, (err) => {
				if (err) return next(err)
				res.redirect('/products')
			})
		})(req, res, next)
	}

	static logoutUser(req, res) {
		req.logout((err) => {
			if (err) {
				return res.status(500).json({ success: false, msg: err.message })
			}
			res.redirect('/auth/login')
		})
	}

	static signupFromRender(req, res) {
		const id = req.params.id
		let user = {}

		if (id) {
			user = req.body
		}

		try {
			res.render('general/generalEditForm', {
				pageTitle: 'Signup',
				headerTitle: 'Signup',
				fields: [
					{ name: 'fullName', type: 'text', required: true, label: 'Full Name' },
					{ name: 'phoneNumber', type: 'number', required: true, label: 'Phone Number' },
					{ name: 'email', type: 'email', required: true, label: 'Email' },
					{ name: 'password', type: 'password', required: true, label: 'Password' },
				],
				initialValues: user,
				errors: [],
				submitUrl: '/auth/signup',
				redirectUrl: '/products',
				user: req.user,
				isSignup: false,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async signup(req, res) {
		const newUser = req.body
		const expressErrors = validationResult(req)

		if (!expressErrors.isEmpty()) {
			const errors = FormatValidationErrors.formatExpressErrors(expressErrors)
			return res.status(400).json({ errors })
		}

		try {
			const user = await UsersDBService.create(newUser)

			req.login(user, (err) => {
				if (err) return next(err)
				res.redirect('/products')
			})
		} catch (error) {
			const errors = FormatValidationErrors.formatMongooseErrors(error.message, 'User')
			res.status(400).json({ errors })
		}
	}
}

export default AuthController
