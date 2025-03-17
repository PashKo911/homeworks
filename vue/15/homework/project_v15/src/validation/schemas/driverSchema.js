import * as yup from 'yup'

const driverSchema = yup.object().shape({
	name: yup.string().required(),
	experience: yup.number().required().positive().integer().min(1).max(40),
})

export default driverSchema
