import { validationResult } from 'express-validator'
import ProductsDBService from '../models/product/ProductsDBService.mjs'
import FormatValidationErrors from '../validators/formatValidationErrors.mjs'

class ProductsController {
	static async productsList(req, res) {
		try {
			const { sortBy } = req.query
			const sortOption = sortBy ? { sort: { price: Number(sortBy) } } : null

			const productsList = await ProductsDBService.getList({}, null, sortOption)

			res.render('general/generalList', {
				pageTitle: 'Products',
				headerTitle: 'Products',
				fields: { title: 'Title', amount: 'Amount', price: 'Price' },
				data: productsList,
				addNewRoute: '/products/addProduct',
				editLinkBase: '/products/addProduct',
				deleteRoute: '/products/',
				user: req.session.user,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async productFormRender(req, res) {
		try {
			let product = {}
			const id = req.params.id

			if (id) {
				product = await ProductsDBService.getById(id)
			}

			res.render('general/generalEditForm', {
				pageTitle: id ? 'Edit Product' : 'Add Product',
				headerTitle: id ? 'Edit Product' : 'Add Product',
				fields: [
					{ name: 'title', type: 'text', required: true, label: 'Title' },
					{ name: 'price', type: 'number', required: true, label: 'Price' },
					{ name: 'amount', type: 'number', required: true, label: 'Amount' },
				],
				initialValues: product,
				errors: [],
				submitUrl: '/products/addProduct' + (id ? `/${id}` : ''),
				redirectUrl: '/products?sortBy=-1',
				user: req.session.user,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	static async addProduct(req, res) {
		const product = req.body
		const id = req.params.id
		const expressErrors = validationResult(req)

		if (!expressErrors.isEmpty()) {
			const errors = FormatValidationErrors.formatExpressErrors(expressErrors)
			return res.status(400).json({ errors })
		}

		try {
			if (id) {
				await ProductsDBService.update(id, product)
			} else {
				await ProductsDBService.create(product)
			}
			res.redirect('/products')
		} catch (error) {
			const errors = FormatValidationErrors.formatMongooseErrors(error.message)
			return res.status(400).json({ errors })
		}
	}

	static async deleteProduct(req, res) {
		try {
			const id = req.body.id

			await ProductsDBService.deleteById(id)
			res.json({ success: true })
		} catch (error) {
			res.status(500).json({ success: false, message: 'Failed to delete product' })
		}
	}
}

export default ProductsController
