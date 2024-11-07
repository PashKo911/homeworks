import { validationResult } from 'express-validator'

class FormatErrors {
	// Створюю обʼєкт для зручного відображення помилок
	static formatExpressValidatorErrors(errorsArr) {
		return errorsArr.reduce((acc, error) => {
			if (!acc[error.path]) {
				acc[error.path] = []
			}
			acc[error.path].push(error.msg)
			return acc
		}, {})
	}

	// Функція для форматування помилок MongoDB
	static formatMongoDBErrors(mongoError) {
		// Перевірка, чи є помилки в обʼєкті MongoDB
		if (mongoError.errors) {
			return Object.keys(mongoError.errors).reduce((acc, key) => {
				const error = mongoError.errors[key]
				if (!acc[key]) {
					acc[key] = []
				}
				acc[key].push(error.message)
				return acc
			}, {})
		}
		return null
	}

	// Функція валідації запиту для Express
	static validateRequest(req) {
		const errorsArr = validationResult(req)
		if (!errorsArr.isEmpty() || !req.file) {
			const errors = this.formatExpressValidatorErrors(errorsArr.array())
			if (!req.file) {
				errors.productImg = ["Зображення обов'язкове"]
			}
			return errors
		}
		return null
	}
}

export default FormatErrors
