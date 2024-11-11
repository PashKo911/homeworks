import mongoose from 'mongoose'
import config from '../../config/default.mjs'

const { Schema } = mongoose

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: [true, 'First Name is required'],
			minlength: [3, 'First Name must be at least 3 characters long'],
			maxlength: [50, 'First Name must be at most 50 characters long'],
			trim: true,
		},
		lastName: {
			type: String,
			required: [true, 'Last Name is required'],
			minlength: [3, 'Last Name must be at least 3 characters long'],
			maxlength: [50, 'Last Name must be at most 50 characters long'],
			trim: true,
		},
		phoneNumber: {
			type: String,
			required: [true, 'Phone number is required'],
			validate: {
				validator: function (v) {
					return /^\+?[1-9]\d{1,14}$/.test(v)
				},
				message: 'Phone number must be in E.164 format, e.g., +1234567890',
			},
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			trim: true,
			lowercase: true,
			validate: {
				validator: function (v) {
					return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
				},
				message: 'Email must be a valid format',
			},
		},
		country: {
			type: Schema.Types.ObjectId,
			ref: 'Country',
			required: [true, 'Country is required'],
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			minlength: [8, 'Password must be at least 8 characters long'],
			validate: {
				validator: function (v) {
					return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v)
				},
				message: 'Password must contain at least one letter, one number, and one special character',
			},
		},
	},
	{ timestamps: true }
)

// Віртуальне поле для обʼєднання в fullName
userSchema.virtual('fullName').get(function () {
	return `${this.firstName} ${this.lastName}`
})

// Віртуальне поле для форматування номера телефона
userSchema.virtual('formattedPhoneNumber').get(function () {
	const phone = this.phoneNumber.replace(/\D/g, '')
	return `(${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 11)}`
})

// Опція для увімкнення віртуального поля і додавання його в json
userSchema.set('toJSON', { virtuals: true })

userSchema.statics.checkDatabaseExists = async () => {
	const databases = await mongoose.connection.listDatabases()
	return databases.databases.some((db) => db.name === config.databaseName)
}
userSchema.statics.checkCollectionExists = async function () {
	if (await this.checkDatabaseExists()) {
		const collections = await mongoose.connection.db.listCollections({ name: 'users' }).toArray()
		return collections.length > 0
	}
	return false
}
const User = mongoose.model('User', userSchema)
export default User
