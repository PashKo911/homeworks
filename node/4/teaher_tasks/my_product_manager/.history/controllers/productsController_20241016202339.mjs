import Product from '../models/Product.mjs'
class ProductsController {
  static mainProducts(req, res) {
    const productsList = Product.loadProductsList()

    res.render('products/productsList', {
      products: productsList,
    })
  }

  static productDetail(req, res){
    const id = req.params.id
    //отримати об"єкт продукта за id
    const product = Product.getProductById(id)
    //відредерити сторінку з інформацією про товар
    res.render('products/productDetail', {
        product
      })
    }
  }
}

export default ProductsController
