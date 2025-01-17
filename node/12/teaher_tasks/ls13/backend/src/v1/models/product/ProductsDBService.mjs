import Product from './Product.mjs'
import User from '../user/User.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'
import mongoose from 'mongoose'

class ProductsDBService extends MongooseCRUDManager {
  /**
   * Конфігурація полів для фільтрації та пошуку (які будемо опрацьовувати).
   */
  static fieldsConfigurations = [
    {
      fieldName: 'title',
      filterCategory: 'search',
    },
    {
      fieldName: 'price',
      filterCategory: 'range',
    },
    {
      fieldName: 'seller',
      filterCategory: 'list',
    },
  ]

  /**
   * Отримує список продуктів з урахуванням запиту користувача.
   *
   * @param {Object} reqQuery - Об'єкт з параметрами запиту, включаючи фільтри, сортування та пагінацію.
   * @returns {Promise<Product[]>} - Promise, який вирішується масивом знайдених продуктів.
   */
  async getList(reqQuery) {
    try {
      const res = await this.findManyWithSearchOptions(
        reqQuery,
        ProductsDBService.fieldsConfigurations,
        null,
        [
          {
            fieldForPopulation: {
              path: 'seller',
              populate: {
                path: 'type',
              },
            },
          },
        ]
      )

      return res
    } catch (error) {
      return []
    }
  }

  //------- функція для отримання інформації про продавця -------
  async getProductsByUserId(userId) {
    try {
      // Знаходимо користувача за userId та заповнюємо зв'язані поля
      // mongoose.Types.ObjectId(userId)
      const user = await User.findById(userId).populate('type')

      if (!user) {
        throw new Error('User not found') // Викидання помилки, якщо користувача не знайдено
      }

      // Знаходимо продукти користувача за полем seller
      const products = await Product.find({
        seller: userId,
        // seller: mongoose.Types.ObjectId(userId),
      })

      // Отримання даних про користувача
      const userName = user.username
      const userType = user.type.title
      // userId = user._id

      // Отримання даних про товари
      const userProducts = products.map((product) => ({
        _id: product._id,
        image: product.image,
        title: product.title,
        price: product.price,
        description: product.description,
      }))

      return {
        userName,
        userType,
        userId,
        userProducts,
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default new ProductsDBService(Product)
