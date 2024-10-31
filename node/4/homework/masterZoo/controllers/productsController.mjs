import Product from '../models/Product.mjs'
import upload from '../utils/uploadConfig.mjs'

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
		res.render('pages/products/productsForm', { currentPath: req.path })
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
}

export default ProductsController
