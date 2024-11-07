// !!! Два момента так і не вирішив
// !!! 1) в чаті писав про додавання файлу при неуспішній валідації
// !!! 2) При редагуванні продукту, треба заново обирати зображення, превʼю зберігається але в інпуті файл не лежить,
// !!! при створенні продукту також після валідації всі поля форми заповнюються, а от файл  треба знову  обирати, взагалі з цим фалом закопався))

import path from 'path'

import DataFileManager from '../utils/DataFileManager.mjs'

import Product from '../models/Product.mjs'
import FormatErrors from '../models/FormatErrors.mjs'

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
		const id = req.params.id
		let product = {}

		if (id) {
			product = await Product.getProductById(id)
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

		// Ініціалізація даних продукту
		const productData = {
			...req.body,
			...(req.file ? { imgPath: `/images/products/${req.file.filename}` } : {}),
		}

		// Оновлення або додавання продукту
		if (req.params.id) {
			if (req.file) {
				await Product.deleteOldImage(req.params.id, req.__dirname) // Видалення старого зображення
			}
			await Product.updateProduct(req.params.id, productData)
		} else {
			await Product.addProduct(productData)
		}

		res.redirect('/products/productsList')
	}

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
