import UsersDBService from '../models/user/UsersDBService.mjs'
import TypesDBService from '../models/type/TypesDBService.mjs'

class UsersController {
	static async usersList(req, res) {
		try {
			const filters = {}
			for (const key in req.query) {
				if (req.query[key]) filters[key] = req.query[key]
			}
			const usersList = await UsersDBService.getList(filters)

			res.render('general/generalList', {
				pageTitle: 'Users',
				headerTitle: 'Users',
				fields: { fullName: 'Full Name', phoneNumber: 'Phone Number', email: 'Email', type: 'Type' },
				data: usersList,
				addNewRoute: null,
				editLinkBase: '/users',
				deleteRoute: '/users/',
				user: req.user,
				isEdit: true,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
	static async editUserForm(req, res) {
		const id = req.params.id

		try {
			const types = await TypesDBService.getList()
			const user = await UsersDBService.getById(id)

			res.render('general/generalEditForm', {
				pageTitle: 'Edit User',
				headerTitle: 'Edit User',
				fields: [
					{
						name: 'type',
						type: 'select',
						multiple: false,
						required: true,
						options: types,
						label: 'Types',
					},
				],
				errors: [],
				submitUrl: '/users/' + id,
				redirectUrl: '/users',
				user: req.user,
				isSignup: false,
				initialValues: user,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async updateType(req, res) {
		try {
			const id = req.params.id
			const { type } = req.body
			const user = await UsersDBService.getById(id)

			user.type = type
			user.save()
			res.redirect('/users')
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async deleteUser(req, res) {
		try {
			const id = req.body.id
			await UsersDBService.deleteById(id)
			res.json({ success: true })
		} catch (error) {
			res.status(500).json({ success: false, message: 'Failed to delete user' })
		}
	}
}

export default UsersController
