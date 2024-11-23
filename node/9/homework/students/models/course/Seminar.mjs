import { Schema } from 'mongoose'

const seminarSchema = new Schema({
	topic: {
		type: String,
		required: [true, 'Topic is required'],
		minLength: [3, 'Topic mast be at least 3 characters long'],
		trim: true,
	},
	responsible: {
		type: Schema.Types.ObjectId,
		ref: 'Student',
		required: true,
	},
	lectionDuration: {
		type: Number,
		required: [true, 'Lection Duration is required'],
		min: [60, 'Lection duration mast be at least 60 minutes'],
	},
})

export default seminarSchema
