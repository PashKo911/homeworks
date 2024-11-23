class UserValidator {
	static userSchema = {
		email: {
			isEmail: {
				errorMessage: 'Invalid email address',
			},
			normalizeEmail: true,
			escape: true,
		},

		password: {
			trim: true,
			notEmpty: {
				errorMessage: 'Password is required',
			},
			isLength: {
				options: { min: 8 },
				errorMessage: 'Password at least 8 characters long',
			},
			escape: true,
		},
	}
}

export default UserValidator
