import User from './User.mjs'
import mongoose from 'mongoose'

class UsersDBService {
  static async getList(filters) {
    try {
      const res = await User.find(filters, { password: 0 }).populate('type')
      console.log('=======>>>> res')
      console.log(res)
      return res
    } catch (error) {
      console.log('====>>> error')
      console.log(error)

      return []
    }
  }

  static async create(data) {
    const user = new User(data)
    return await user.save()
  }

  static async getById(id) {
    return await User.findById(id)
  }

  static async update(id, data) {
    return await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })
  }

  static async deleteById(id) {
    return await User.findByIdAndDelete(id)
  }
}

export default UsersDBService
