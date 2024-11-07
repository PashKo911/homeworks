import path from 'path'

import ProductsDBService from '../models/product/ProductsDBService.mjs'

import FormatErrors from '../validators/FormatErrors.mjs'

class ProductsController {
	static async mainProducts(req, res) {
		const productsList = await ProductsDBService.loadProductsList()
		res.render('pages/products/productsList', { productsList, currentPath: req.path })
	}

	static async productDetail(req, res) {
		const id = req.params.id

		const product = await ProductsDBService.getProductById(id)
		const { imgPath } = product
		res.render('pages/products/productsDetail', { product, currentPath: req.path })
	}

	static async productFormPageRender(req, res) {
		const id = req.params.id
		let product = {}

		if (id) {
			product = await ProductsDBService.getProductById(id)
		}
		res.render('pages/products/productsForm', { currentPath: req.path, product, errors: [] })
	}

	static async addProduct(req, res) {
		const errors = FormatErrors.validateRequest(req)

		if (errors) {
			const product = {
				...req.body,
				...(req.params.id ? { id: req.params.id } : {}),
			}

			return res.status(400).render('pages/products/productsForm', {
				currentPath: req.path,
				product,
				errors,
			})
		}

		try {
			// Ініціалізація даних продукту
			const productData = {
				...req.body,
				...(req.file ? { imgPath: `/images/products/${req.file.filename}` } : {}),
			}

			if (req.params.id) {
				if (req.file) {
					await ProductsDBService.deleteOldImage(req.params.id, req.__dirname) // Видалення старого зображення
				}
				await ProductsDBService.updateProduct(req.params.id, productData)
			} else {
				await ProductsDBService.addProduct(productData)
			}
			res.redirect('/products/productsList')
		} catch (error) {
			const product = {
				...req.body,
				...(req.params.id ? { id: req.params.id } : {}),
			}
			const errors = FormatErrors.formatMongoDBErrors(error)
			console.log('===========')
			console.log(errors, 'errors formated')
			console.log('===========')
			console.log(error, 'error ')

			res.status(500).render('pages/products/productsForm', {
				currentPath: req.path,
				product,
				errors,
			})
		}
	}

	static async deleteProduct(req, res) {
		const id = req.params.id

		const product = await ProductsDBService.getProductById(id)

		if (product.imgPath) {
			const staticImgPath = path.join(req.__dirname, 'public/', product.imgPath)
			await ProductsDBService.deleteFile(staticImgPath)
		}
		await ProductsDBService.deleteProductById(id)
		res.sendStatus(204)
	}
}

export default ProductsController
