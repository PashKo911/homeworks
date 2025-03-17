import * as yup from 'yup'

const assignmentSchema = yup.object().shape({
	busId: yup.string().required('Driver is required field'),
	driverId: yup.string().required('Bus is required field'),
})

export default assignmentSchema
