import { validationResult } from 'express-validator'

class FormatErrors {
	// Створюю обʼєкт для зручного відображення помилок
	static formatToObj(errorsArr) {
		return errorsArr.reduce((acc, error) => {
			if (!acc[error.path]) {
				acc[error.path] = []
			}
			acc[error.path].push(error.msg)
			return acc
		}, {})
	}

	// Функція валідації запиту
	static validateRequest(req) {
		const errorsArr = validationResult(req)
		if (!errorsArr.isEmpty() || !req.file) {
			const errors = this.formatToObj(errorsArr.array())
			if (!req.file) {
				errors.productImg = ["Зображення обов'язкове"]
			}
			return errors
		}
		return null
	}
}

export default FormatErrors
