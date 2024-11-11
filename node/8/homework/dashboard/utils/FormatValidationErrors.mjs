class FormatValidationErrors {
	static formatMongoErrors(error) {
		return error.errors
			? Object.fromEntries(Object.entries(error.errors).map(([field, { message }]) => [field, message]))
			: {}
	}
}

export default FormatValidationErrors
