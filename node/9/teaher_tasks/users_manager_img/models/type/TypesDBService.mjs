import Type from './Type.mjs'
import mongoose from 'mongoose'

class TypesDBService {
  static async getList(filters) {
    try {
      const res = await Type.find({})
      console.log('=======>>>> res types')
      console.log(res)
      return res
    } catch (error) {
      console.log('====>>> error types')
      console.log(error)

      return []
    }
  }
}

export default TypesDBService
