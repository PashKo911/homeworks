import mongoose from 'mongoose'
import config from '../../config/default.mjs'

const { Schema } = mongoose

const productSchema = new Schema(
	{
		article: {
			type: String,
			required: [true, 'Article is required'],
			minlength: [3, 'Article must be at least 3 digits long'],
			maxlength: [6, 'Article must be at most 6 digits long'],
			match: [/^\d+$/, 'Article must contain only digits'],
			trim: true,
		},
		title: {
			type: String,
			required: [true, 'Title is required'],
			minlength: [3, 'Title must be at least 3 characters long'],
			maxlength: [100, 'Title must be at most 100 characters long'],
			trim: true,
		},
		price: {
			type: Number,
			required: [true, 'Price is required'],
			min: [0.01, 'Price must be greater than 0'],
			validate: {
				validator: (value) => value > 0,
				message: 'Price must be a positive number',
			},
		},
		description: {
			type: String,
			required: [true, 'Description is required'],
			minlength: [10, 'Description must be at least 10 characters long'],
			trim: true,
		},
		imgPath: {
			type: String,
			required: [true, 'Image path is required'],
			match: [/\.jpg$|\.jpeg$|\.png$|\.webp$/, 'Image must be a .jpg, .jpeg, webp or .png file'],
		},
	},
	{ timestamps: true }
)

productSchema.statics.checkDatabaseExists = async () => {
	const databases = await mongoose.connection.listDatabases()
	return databases.databases.some((db) => db.name === config.databaseName)
}

productSchema.statics.checkCollectionExists = async function () {
	if (await this.checkDatabaseExists()) {
		const collections = await mongoose.connection.db.listCollections({ name: 'products' }).toArray()
		return collections.length > 0
	}
	return false
}

const Product = mongoose.model('Product', productSchema)

export default Product
