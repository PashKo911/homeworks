import Product from '../models/Product.mjs'
import fs from 'fs'
import path from 'path'

class ProductsController {
	static mainProducts(req, res) {
		const productsList = Product.loadProductsList()

		res.render('products/productsList', {
			products: productsList,
		})
	}

	static productDetail(req, res) {
		const id = req.params.id
		//отримати об"єкт продукта за id
		const product = Product.getProductById(id)
		//відредерити сторінку з інформацією про товар
		res.render('products/productDetail', {
			product,
		})
	}

	static createForm(req, res) {
		//відредерити сторінку з формою
		res.render('products/productForm', {
			product: null,
		})
	}

	static editForm(req, res) {
		const id = req.params.id
		//отримати об"єкт продукта за id
		const product = Product.getProductById(id)
		//відредерити сторінку з формою
		res.render('products/productForm', {
			product,
		})
	}

	static createProduct(req, res) {
		const productData = req.body
		productData.imgSrc = `/${req.file.filename}`
		Product.addNewProduct(productData)
		res.redirect('/products')
	}

	static updateProduct(req, res) {
		const productData = req.body
		if (req.file) {
			productData.imgSrc = `/${req.file.filename}`
		}

		Product.updateProduct(req.params.id, productData)
		res.redirect('/products')
	}

	static deleteProduct(req, res) {
		console.log('req.body.id')
		console.log(req.body.id)

		const id = req.body.id
		//отримати об"єкт продукта за id
		const product = Product.getProductById(id)
		if (product.imgSrc && fs.existsSync(product.imgSrc)) {
			console.log(1111)

			console.log(path.join(req.__dirname, `uploads\\${product.imgSrc}`))

			fs.unlinkSync(path.join(req.__dirname, `uploads\\${product.imgSrc}`))
		}

		Product.deleteProductById(req.body.id)
		// res.send(200, { success: true })
		// res.redirect('/products')
	}
}

export default ProductsController
