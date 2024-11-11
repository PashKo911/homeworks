import User from './User.mjs'

class UsersDBService {
	static buildQuery(filters) {
		const query = {}
		if (filters.search) {
			const searchFields = ['firstName', 'lastName', 'email', 'role'] //!Country поки не працює
			query.$or = searchFields.map((field) => ({
				[field]: { $regex: filters.search, $options: 'i' },
			}))
		}
		return query
	}

	static buildSort(sortBy) {
		const sort = {}
		if (sortBy) {
			if (sortBy === 'newest') {
				sort.createdAt = -1
			} else {
				sort[sortBy] = 1
			}
		}
		return sort
	}

	static async getList(filters, sortBy = null) {
		try {
			const query = this.buildQuery(filters)
			const sort = this.buildSort(sortBy)

			const usersList = await User.find(query).sort(sort).populate('country')
			return usersList
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
