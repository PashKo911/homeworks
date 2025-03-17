import * as yup from 'yup'

const busSchema = yup.object().shape({
	number: yup
		.string()
		.required()
		.matches(/^[A-Z]{2}\d{4}[A-Z]{2}$/, 'Right format AA1234BB'),
	seats: yup.number().required().positive().integer().min(10).max(40),
})

export default busSchema
