import { validationResult } from 'express-validator'
import FormatValidationErrors from '../../../validators/formatValidationErrors.mjs'
import User from '../models/user/User.mjs'
import UsersDBService from '../models/user/UsersDBService.mjs'
import { prepareToken } from '../../../utils/jwtHelpers.mjs'

class AuthController {
	static async signup(req, res) {
		const newUser = req.body
		const expressErrors = validationResult(req)

		if (!expressErrors.isEmpty()) {
			const errors = FormatValidationErrors.formatExpressErrors(expressErrors)
			return res.status(400).json({ errors })
		}

		try {
			const user = await UsersDBService.create(newUser)

			const token = prepareToken(
				{
					id: user._id,
					nick: user.nick,
				},
				req.headers
			)
			res.status(201).json({
				result: 'Signed up successfully',
				token,
			})
		} catch (error) {
			const errors = FormatValidationErrors.formatMongooseErrors(error.message, 'User')
			res.status(400).json({ errors })
		}
	}

	static async login(req, res) {
		const expressErrors = validationResult(req)

		if (!expressErrors.isEmpty()) {
			const errors = FormatValidationErrors.formatExpressErrors(expressErrors)
			return res.status(400).json({ errors })
		}

		try {
			const user = await UsersDBService.findOne({
				email: req.body.email,
			})

			if (!user) {
				return res.status(401).json({ errors: [{ message: 'Невірно введено Email або пароль' }] })
			}

			const token = prepareToken(
				{
					id: user._id,
					username: user.username,
				},
				req.headers
			)
			res.json({
				result: 'Authorized',
				token,
			})
		} catch (error) {
			const errors = FormatValidationErrors.formatMongooseErrors(error.message, 'User')
			res.status(401).json({ errors })
		}
	}
}

export default AuthController
