import dataFileManager from '../utils/DataFileManager.mjs'
class Product {
  static readProductsList() {
    try {
      return dataFileManager.loadData()
    } catch (error) {
      throw new Error('Не вдалось заватажити список продуктів')
    }
  }
}
