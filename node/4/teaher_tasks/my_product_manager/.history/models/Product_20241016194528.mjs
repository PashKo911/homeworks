import dataFileManager from '../utils/DataFileManager.mjs'
class Product {
  static readProductsList() {
    try {
      return dataFileManager.loadData()
    } catch (error) {
      throw new Error('Не вдалось заватажити список продуктів')
    }
  }
  static addNewProduct(productObj) {
    try {
      dataFileManager.addItem({ id: new Date().getTime(), ...productObj })
    } catch (error) {
      throw new Error('Операція з даними не пройшла!')
    }
  }
  static getProductById(id) {
    try {
      dataFileManager.getItemById(id)
    } catch (error) {
      throw new Error('Операція з даними не пройшла!')
    }
  }
}
