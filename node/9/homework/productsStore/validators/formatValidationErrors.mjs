class FormatValidationErrors {
	static formatExpressErrors(errorsObj) {
		return errorsObj.errors.map((error) => ({
			message: error.msg,
		}))
	}

	static formatMongooseErrors(errorsString) {
		const errorMessagesPart = errorsString.split(': Good validation failed: ')[1]
		if (!errorMessagesPart) return []

		const errorMessages = errorMessagesPart.split(', ')

		return errorMessages.map((error) => {
			const parts = error.split(': ')
			const message = parts.slice(1).join(': ').trim()
			return { message }
		})
	}
}

export default FormatValidationErrors
