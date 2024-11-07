import { body } from 'express-validator'

class ProductsValidator {
	// !Chain схема приклад
	static userValidationRules = [
		body('email').isEmail().withMessage('Invalid email address'),
		body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
		body('name').not().isEmpty().withMessage('Name is required'),
	]

	// !Schema validation
	static productsSchema = {
		article: {
			isInt: {
				options: { min: 1 },
				errorMessage: 'Артикул має бути числом і не менше 1.',
			},
			trim: true,
		},
		title: {
			isLength: {
				options: { min: 3, max: 100 },
				errorMessage: 'Назва товару повинна містити від 3 до 100 символів.',
			},
			trim: true,
			escape: true, // Екранує HTML символи
		},
		price: {
			isFloat: {
				options: { min: 0.01 },
				errorMessage: 'Ціна має бути числом більше 0.',
			},
			notEmpty: {
				errorMessage: 'Поле не повинно бути порожнім',
			},
			trim: true,
		},
		description: {
			isLength: {
				options: { min: 10 },
				errorMessage: 'Опис товару повинен містити від 10',
			},
			trim: true,
			escape: true,
		},
	}
}

export default ProductsValidator
