import Product from '../models/Product.mjs'
import upload from '../utils/uploadConfig.mjs'
import DataFileManager from '../utils/DataFileManager.mjs'
import path from 'path'

class ProductsController {
	static async mainProducts(req, res) {
		const productsList = await Product.loadProductsList()
		res.render('pages/products/productsList', { productsList, currentPath: req.path })
	}

	static async productDetail(req, res) {
		const id = req.params.id
		const product = await Product.getProductById(id)
		res.render('pages/products/productsDetail', { product, currentPath: req.path })
	}

	static async productFormPageRender(req, res) {
		res.render('pages/products/productsForm', { currentPath: req.path, products: null })
	}

	static async editForm(req, res) {
		const id = req.params.id
		const products = await Product.getProductById(id)

		res.render('pages/products/productsForm', { products, currentPath: req.path })
	}

	static addProduct = [
		upload.single('img'),
		async (req, res) => {
			const productData = {
				...req.body,
				imgPath: `/images/products/${req.file.filename}`,
			}
			await Product.addProduct(productData)
			res.redirect('/products/productsList')
		},
	]

	static updateProduct = [
		upload.single('img'),
		async (req, res) => {
			const productData = req.body
			if (req.file) {
				// Видалення старого зображення перед збереженням нового
				const { imgPath } = await Product.getProductById(req.params.id)
				const staticImgPath = path.join(req.__dirname, 'public/', imgPath)
				await DataFileManager.deleteFile(staticImgPath)

				// Додавання нового
				productData.imgPath = `/images/products/${req.file.filename}`
			}
			await Product.updateProduct(req.params.id, productData)
			res.redirect('/products/productsList')
		},
	]

	static async deleteProduct(req, res) {
		const id = req.params.id

		const product = await Product.getProductById(id)

		if (product.imgPath) {
			const staticImgPath = path.join(req.__dirname, 'public/', product.imgPath)
			await DataFileManager.deleteFile(staticImgPath)
		}
		await Product.deleteProductById(id)
		res.sendStatus(204)
	}
}

export default ProductsController
