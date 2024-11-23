class StudentValidator {
	static studentSchema = {
		name: {
			notEmpty: {
				errorMessage: 'Name is required',
			},
			isLength: {
				options: { min: 3 },
				errorMessage: 'Username must  be at least 3 characters long',
			},
			trim: true,
			escape: true,
		},
		age: {
			isInt: {
				options: { min: 15 },
				errorMessage: 'Age must be at least 15 years old',
			},
			toInt: true,
		},
		averageGrade: {
			isFloat: {
				options: { min: 1, max: 5 },
				errorMessage: 'Average Grade must be between 1 and 5',
			},
			toFloat: true,
			notEmpty: {
				errorMessage: 'Average Grade is required',
			},
		},
	}
}

export default StudentValidator
