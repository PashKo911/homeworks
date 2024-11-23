import CoursesDBService from '../models/course/CoursesDBService.mjs'
import StudentsDBService from '../models/student/StudentsDBService.mjs'
import FormatValidationErrors from '../validators/formatValidationErrors.mjs'

class CoursesController {
	static async coursesList(req, res) {
		try {
			const courses = await CoursesDBService.getList({}, null, null)

			res.render('course/coursesList', {
				pageTitle: 'Courses',
				headerTitle: 'Courses',
				addNewRoute: '/courses/addCourse',
				editLinkBase: '/courses/addCourse',
				deleteCourseRoute: '/courses',
				addNewSeminarRoute: '/courses/seminar/addSeminar',
				deleteSeminarRoute: '/courses/seminar',
				courses,
			})
		} catch (error) {
			res.status(500).json({ error: err.message })
		}
	}

	static async coursesFormRender(req, res) {
		let course = {}
		const id = req.params.id

		try {
			const studentsList = await StudentsDBService.getList()
			if (id) {
				course = await CoursesDBService.getById(id)
				console.log(course)
			}

			res.render('general/generalEditForm', {
				pageTitle: id ? 'Edit Course' : 'Add Course',
				headerTitle: id ? 'Edit Course' : 'Add Course',
				fields: [
					{ name: 'title', type: 'text', required: true, label: 'Title' },
					{ name: 'courseDuration', type: 'number', required: true, label: 'Course Duration' },
					{
						name: 'students',
						type: 'select',
						multiple: true,
						required: true,
						options: studentsList,
						label: 'Students',
					},
				],
				initialValues: course,
				errors: [],
				submitUrl: '/courses/addCourse' + (id ? `/${id}` : ''),
				redirectUrl: '/courses',
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async addCourse(req, res) {
		const course = req.body
		const id = req.params.id

		try {
			if (id) {
				await CoursesDBService.update(id, course)
			} else {
				await CoursesDBService.create(course)
			}
			res.redirect('/courses')
		} catch (error) {
			const errors = FormatValidationErrors.formatMongooseErrors(error.message, 'Course')
			return res.status(400).json({ errors })
		}
	}

	static async deleteCourse(req, res) {
		try {
			const id = req.body.id
			console.log(id)

			await CoursesDBService.deleteById(id)
			res.json({ success: true })
		} catch (error) {
			res.status(500).json({ success: false, message: 'Failed to delete course' })
		}
	}

	//Seminars========================================================================================================================================================
	static async seminarFormRender(req, res) {
		let course = {}
		let seminar = {}
		const { id, seminarId } = req.params

		try {
			const studentsList = await StudentsDBService.getList()
			if (seminarId && id) {
				course = await CoursesDBService.getById(id)

				seminar = course.seminars.find((seminar) => seminar._id.toString() === seminarId)

				if (!seminar) {
					console.error('Seminar not found')
					throw new Error('Seminar not found')
				}

				console.log(seminar)
			}

			res.render('general/generalEditForm', {
				pageTitle: seminarId ? 'Edit Seminar' : 'Add Seminar',
				headerTitle: seminarId ? 'Edit Seminar' : 'Add Seminar',
				fields: [
					{ name: 'topic', type: 'text', required: true, label: "Seminar's Topic" },
					{
						name: 'responsible',
						type: 'select',
						required: true,
						options: studentsList,
						label: 'Responsible Student',
					},
					{ name: 'lectionDuration', type: 'number', required: true, label: 'Lection Duration' },
				],
				initialValues: seminar,
				errors: [],
				submitUrl: '/courses/seminar/addSeminar' + (id ? `/${id}` : ''),
				redirectUrl: '/courses',
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async addSeminar(req, res) {
		const id = req.params.id
		const seminar = req.body

		try {
			const course = await CoursesDBService.getById(id)

			course.seminars.push(seminar)
			await course.save()

			res.redirect('/courses')
		} catch (error) {
			if (error.name === 'ValidationError') {
				const errors = FormatValidationErrors.formatArrayFieldMongooseErrors(error)
				return res.status(400).json({ errors })
			} else {
				return res.status(400).json({
					errors: [{ message: "Can't find course by ID" }],
				})
			}
		}
	}
	static async deleteSeminar(req, res) {
		try {
			const course = await CoursesDBService.getById(req.params.id)

			course.seminars = course.seminars.filter((seminar) => seminar._id.toString() !== req.body.id)
			await course.save()
			res.redirect('/courses')
		} catch (error) {
			res.status(500).json({ success: false, message: 'Failed to delete seminar' })
		}
	}
}

export default CoursesController
