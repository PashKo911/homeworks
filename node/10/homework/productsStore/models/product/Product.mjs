import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Title is required'],
		minlength: [3, 'Title must be at least 3 characters long'],
		maxlength: [50, 'Title must be at most 50 characters long'],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, 'Price is required'],
		min: [0, 'Price must be a positive number'],
	},
	amount: {
		type: Number,
		required: [true, 'Amount is required'],
		min: [1, 'Amount must be at least 1'],
	},
})

productSchema.statics.checkDatabaseExists = async () => {
	const databases = await mongoose.connection.listDatabases()
	return databases.databases.some((db) => db.name === config.databaseName)
}

productSchema.statics.checkCollectionExists = async function () {
	if (await this.checkDatabaseExists()) {
		const collections = await mongoose.connection.db.listCollections({ name: 'goods' }).toArray()
		return collections.length > 0
	}
	return false
}

const Product = mongoose.model('Good', productSchema)

export default Product
