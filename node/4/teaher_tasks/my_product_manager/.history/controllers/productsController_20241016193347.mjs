class ProductsController {
  static mainProducts(req, res) {
    const productsList = res.render('meals', {
      products: productsList,
    })
  }
}
