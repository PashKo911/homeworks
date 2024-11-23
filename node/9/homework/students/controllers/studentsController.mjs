import { validationResult } from 'express-validator'
import StudentsDBService from '../models/student/StudentsDBService.mjs'
import FormatValidationErrors from '../validators/formatValidationErrors.mjs'

class StudentController {
	static async studentsList(req, res) {
		try {
			const studentsList = await StudentsDBService.getList()

			res.render('general/generalList', {
				pageTitle: 'Students',
				headerTitle: 'Students',
				fields: { name: 'Name', age: 'Age', averageGrade: 'Average Grade' },
				data: studentsList,
				addNewRoute: '/students/addStudent',
				editLinkBase: '/students/addStudent',
				deleteRoute: '/students/',
			})
		} catch (error) {
			res.status(500).json({ error: err.message })
		}
	}
	static async studentsFormRender(req, res) {
		let student = {}
		const id = req.params.id

		try {
			if (id) {
				student = await StudentsDBService.getById(id)
			}

			res.render('general/generalEditForm', {
				pageTitle: id ? 'Edit Student' : 'Add Student',
				headerTitle: id ? 'Edit Student' : 'Add Student',
				fields: [
					{ name: 'name', type: 'text', required: true, label: 'Name' },
					{ name: 'age', type: 'number', required: true, label: 'Age' },
					{ name: 'averageGrade', type: 'number', required: true, label: 'Average Grade', step: '0.1' },
				],
				initialValues: student,
				errors: [],
				submitUrl: '/students/addStudent' + (id ? `/${id}` : ''),
				redirectUrl: '/students',
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
	static async addStudent(req, res) {
		const student = req.body
		const id = req.params.id
		const expressErrors = validationResult(req)

		if (!expressErrors.isEmpty()) {
			const errors = FormatValidationErrors.formatExpressErrors(expressErrors)
			return res.status(400).json({ errors })
		}

		try {
			if (id) {
				await StudentsDBService.update(id, student)
			} else {
				await StudentsDBService.create(student)
			}
			res.redirect('/students')
		} catch (error) {
			const errors = FormatValidationErrors.formatMongooseErrors(error.message, 'Student')
			return res.status(400).json({ errors })
		}
	}
	static async deleteStudent(req, res) {
		try {
			const id = req.body.id
			await StudentsDBService.deleteById(id)
			res.json({ success: true })
		} catch (error) {
			res.status(500).json({ success: false, message: 'Failed to delete student' })
		}
	}
}

export default StudentController
