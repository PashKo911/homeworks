class ProductValidator {
	static productSchema = {
		title: {
			trim: true,
			notEmpty: {
				errorMessage: 'Title is required',
			},
			isLength: {
				options: { min: 3 },
				errorMessage: 'Title must be at least 3 characters long',
			},
			escape: true,
		},
		price: {
			isInt: {
				options: { min: 1 },
				errorMessage: 'Price must be a positive number',
			},
			toInt: true,
		},
		amount: {
			isInt: {
				options: { min: 1 },
				errorMessage: 'Amount must be at least 1',
			},
			toInt: true,
		},
	}
}

export default ProductValidator
