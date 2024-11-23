import ProductsDBService from '../models/product/ProductsDBService.mjs'

class ProductController {
  // Метод для отримання всіх товарів
  static async getAllProducts(req, res) {
    try {
      const filters = {}
      for (const key in req.query) {
        if (req.query[key]) filters[key] = req.query[key]
      }

      const productsList = await ProductsDBService.getList(filters)
      res.render('products/productsList', {
        products: productsList,
        user: req.user,
        errors: [],
      })
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' })
    }
  }

  static async registerForm(req, res) {
    try {
      //   if (req.user?.role !== 'admin') {
      if (!req.user) {
        return res.status(403).json({ error: 'Access denied' })
      }

      const id = req.params.id
      let product = null
      if (id) {
        //отримати об"єкт за id
        product = await ProductsDBService.getById(id)
      }

      //відредерити сторінку з інформацією про товар
      res.render('products/productRegister', {
        product,
        user: req.user,
      })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static async registerProduct(req, res) {
    // if (req.user.role !== 'admin') {
    if (!req.user) {
      return res.status(403).json({ error: 'Access denied' })
    }
    // Якщо перевірка пройшла
    const data = req.body

    try {
      const productData = {
        ...req.body,
        // image: req.file ? req.file.buffer.toString('base64') : null,
      }
      if (req.file?.buffer)
        productData.image = req.file.buffer.toString('base64')

      //   productData.image = req.file.buffer
      //   .from(data, 'base64')
      //   .toString('base64')

      if (req.params.id) {
        // Оновлюємо дані про користувача в базі даних
        ProductsDBService.update(req.params.id, productData)
        // res.json(updatedProduct)
      } else {
        // Додаємо користувача в базу даних
        await ProductsDBService.create(productData)
      }

      res.redirect('/products')
    } catch (err) {
      res.status(500).render('products/productRegister', {
        errors: [{ msg: err.message }],
        product: data,
        user: req.user,
      })
    }
  }

  // Метод для видалення товару (доступний тільки для адміністратора)
  static async deleteProduct(req, res) {
    // if (req.user.role !== 'admin') {
    if (!req.user) {
      return res.status(403).json({ error: 'Access denied' })
    }

    try {
      await ProductsDBService.deleteById(req.body.id)

      res.json({ message: 'Product deleted' })
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' })
    }
  }
}

export default ProductController
