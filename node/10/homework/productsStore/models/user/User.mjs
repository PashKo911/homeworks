import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const { Schema } = mongoose

const userSchema = new Schema({
	fullName: {
		type: String,
		required: [true, 'Full Name is required'],
		minlength: [3, 'Full Name must be at least 3 characters long'],
		maxlength: [50, 'Full Name must be at most 50 characters long'],
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
		required: [true, 'email is required'],
		unique: [true, 'Name is not allowed'],
		minlength: [3, 'Name must be at least 3 characters long'],
		maxlength: [50, 'Name must be at most 50 characters long'],
		trim: true,
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		// minlength: [6, 'Password must be at least 6 characters long'],
		// maxlength: [8, 'Password must be at most 8 characters long'],
		// validate: {
		//   validator: function (v) {
		//     return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
		//       v
		//     )
		//   },
		//   message: (props) =>
		//     'Password must contain at least one letter, one number, and one special character',
		// },
	},
	type: {
		type: Schema.Types.ObjectId,
		ref: 'Type',
		default: new mongoose.Types.ObjectId('67434ecae0c00366f89f7189'),
	},
})

// Хешування паролю перед збереженням
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next()
	}
	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
	next()
})

const User = mongoose.model('User', userSchema)
export default User
