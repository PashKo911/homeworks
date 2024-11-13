import User from './User.mjs'

class UsersDBService {
	static buildQuery(queryParams) {
		const query = {}

		if (queryParams.search) {
			const searchFields = ['firstName', 'lastName', 'email', 'role']

			query.$or = searchFields.map((field) => ({
				[field]: { $regex: queryParams.search, $options: 'i' },
			}))

			query.$or.push({
				country: { $regex: queryParams.search, $options: 'i' },
			})

			console.log('Итоговый запрос:', JSON.stringify(query, null, 2))
		}

		return query
	}

	static buildSort(queryParams) {
		const sort = {}
		if (queryParams.sort) {
			if (queryParams.sort === 'newest') {
				sort.createdAt = -1
			} else {
				sort[queryParams.sort] = 1
			}
		}
		return sort
	}

	static async getList(queryParams) {
		try {
			// const query = this.buildQuery(queryParams)
			// const sort = this.buildSort(queryParams)

			// const usersList = User.find({}, { password: 0 }).populate('country')

			// usersList.find(query).sort(sort)

			// const result = await usersList.exec()
			// console.log(result)

			// return result
			console.log(queryParams)

			const query = User.find().populate('country', 'name -_id')

			if (queryParams.search) {
				query.where('country').equals(queryParams.search)
			}
			// if (searchParamsObj.title) {
			// 	query.where('title').regex(new RegExp(`${searchParamsObj.title}`, 'i'))
			// }

			const result = await query.exec()

			console.log(result)
			return result
		} catch (error) {
			throw new Error(`Failed to get users list ${error.message}`)
		}
	}

	static async checkIfUserExistsByEmail(email) {
		try {
			const existingUser = await User.findOne({ email })
			return !!existingUser
		} catch (error) {
			console.error(`Failed to check if user exists by email`, error.message)
			throw error
		}
	}

	static async registerUser(data) {
		try {
			const userExists = await this.checkIfUserExistsByEmail(data.email)
			if (userExists) {
				const error = new Error('User with this email already exists')
				error.code = 'EMAIL_EXISTS'
				throw error
			}

			const user = new User(data)
			return await user.save()
		} catch (error) {
			console.error(`Failed to create user`, error.message)
			throw error
		}
	}

	static async getById(id) {
		try {
			return await User.findById(id)
		} catch (error) {
			console.error(`Failed to retrieve user with ID ${id}:`, error.message)
		}
	}

	static async update(id, data) {
		try {
			return await User.findByIdAndUpdate(id, data, {
				new: true,
				runValidators: true,
			})
		} catch (error) {
			console.error(`Failed to update user with ID ${id} (data: ${JSON.stringify(data)}):`, error.message)
		}
	}

	static async deleteById(id) {
		try {
			return await User.findByIdAndDelete(id)
		} catch (error) {
			console.error(`Failed to delete user with ID ${id}:`, error.message)
		}
	}
}

export default UsersDBService
