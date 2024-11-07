import dataFileManager from './DataFileManager.mjs'

class User {
  static loadUserList() {
    try {
      return dataFileManager.loadData()
    } catch (error) {
      throw new Error('Не вдалось заватажити список ')
    }
  }
  static create(userObj) {
    console.log('===== userObj')
    console.log(userObj)

    try {
      dataFileManager.addItem({ id: new Date().getTime(), ...userObj })
    } catch (error) {
      throw new Error('Операція з даними не пройшла!')
    }
  }
  static getUserById(id) {
    try {
      return dataFileManager.getItemById(id)
    } catch (error) {
      throw new Error('Операція з даними не пройшла!')
    }
  }
  static updateUser(id, UserData) {
    console.log('==== UserData')
    console.log(UserData)

    try {
      dataFileManager.updateItemById(id, UserData)
    } catch (error) {
      throw new Error('Операція з даними не пройшла!')
    }
  }
  static deleteUserById(id) {
    try {
      dataFileManager.deleteItemById(id)
    } catch (error) {
      throw new Error('Операція з даними не пройшла!')
    }
  }
}

export default User
