import Product from '../models/Product.mjs'
class ProductsController {
  static mainProducts(req, res) {
    const productsList = Product.loadProductsList()

    res.render('products/productsList', {
      products: productsList,
    })
  }
}

export default ProductsController