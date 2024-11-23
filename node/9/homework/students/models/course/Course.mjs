import mongoose from 'mongoose'
import seminarSchema from './Seminar.mjs'
import config from '../../config/default.mjs'

const { Schema } = mongoose

const courseSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title is required'],
		minlength: [3, 'Title must be at least 3 characters long'],
		maxlength: [50, 'Title must be at most 50 characters long'],
		trim: true,
	},
	courseDuration: {
		type: Number,
		required: [true, 'Course duration is required'],
		min: [1, 'Course duration must be at least 1 hour'],
	},
	students: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Student',
		},
	],
	seminars: [seminarSchema],
})

courseSchema.statics.checkDatabaseExists = async () => {
	const databases = await mongoose.connection.listDatabases()
	return databases.databases.some((db) => db.name === config.databaseName)
}

courseSchema.statics.checkCollectionExists = async function () {
	if (await this.checkDatabaseExists()) {
		const collections = await mongoose.connection.db.listCollections({ name: 'courses' }).toArray()
		console.log(collections)
		return collections.length > 0
	}
	return false
}

const Course = mongoose.model('Course', courseSchema)

export default Course
