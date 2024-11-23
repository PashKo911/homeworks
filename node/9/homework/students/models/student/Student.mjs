import { Schema, model } from 'mongoose'
import mongoose from 'mongoose'
import config from '../../config/default.mjs'

const studentSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Student name is required'],
		minLength: [3, 'Name must be at least 3 characters long'],
		trim: true,
	},
	age: {
		type: Number,
		required: [true, `Student's age is required`],
		min: [15, 'Student must be at least 15 years old'],
	},
	averageGrade: {
		type: Number,
		required: [true, 'Average grade is required'],
		min: [1, 'Average Grade must be at least 1'],
	},
})

studentSchema.statics.checkDatabaseExists = async () => {
	const databases = await mongoose.connection.listDatabases()
	return databases.databases.some((db) => db.name === config.databaseName)
}

studentSchema.statics.checkCollectionExists = async function () {
	if (await this.checkDatabaseExists()) {
		const collections = await mongoose.connection.db.listCollections({ name: 'students' }).toArray()
		console.log(collections)
		return collections.length > 0
	}
	return false
}

const Student = model('Student', studentSchema)

export default Student
