import { v4 as uuidv4 } from 'uuid'

export default class CollectionManager {
  static getItems(collectionName) {
    return JSON.parse(localStorage.getItem(collectionName)) || []
  }

  static saveItems(collectionName, items) {
    localStorage.setItem(collectionName, JSON.stringify(items))
  }

  static addItem(collectionName, item) {
    const items = CollectionManager.getItems(collectionName)
    items.push({
      id: uuidv4(),
      ...item,
    })
    CollectionManager.saveItems(collectionName, items)
  }

  static updateItem(collectionName, updatedItemData) {
    const items = CollectionManager.getItems(collectionName)
    const index = items.findIndex((item) => item.id === updatedItemData.id)
    if (index !== -1) {
      items[index] = { ...items[index], ...updatedItemData }
      CollectionManager.saveItems(collectionName, items)
    }
  }

  static removeItemById(collectionName, id) {
    let items = CollectionManager.getItems(collectionName)
    items = items.filter((item) => item.id !== id)
    CollectionManager.saveItems(collectionName, items)
  }

  static getItemById(collectionName, id) {
    const items = CollectionManager.getItems(collectionName)
    return items.find((item) => item.id === id)
  }
  static getItemsByIdList(collectionName, idsList) {
    const items = CollectionManager.getItems(collectionName)
    return items.filter((item) => idsList.includes(item.id))
  }

  static getItemsList(collectionName) {
    return CollectionManager.getItems(collectionName)
  }
}
