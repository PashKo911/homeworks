import User from './User.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'
import TypesDBService from '../type/TypesDBService.mjs'

class UsersDBService extends MongooseCRUDManager {
  async getList(filters) {
    try {
      const res = await super.getList(filters, { password: 0 }, [
        {
          fieldForPopulation: 'type',
          requiredFieldsFromTargetObject: 'title',
        },
      ])
      return res
    } catch (error) {
      return []
    }
  }
  async getListWithoutAdmin(filters = {}) {
    try {
      const adminType = await TypesDBService.findOne({ title: 'admin' })
      const res = await super.getList(
        { ...filters, type: { $ne: adminType._id } },
        { password: 0 },
        [
          {
            fieldForPopulation: {
              path: 'type',
              select: 'title',
            },
          },
        ]
      )

      return res
    } catch (error) {
      return []
    }
  }

  // async getListWithoutAdmin(filters) {
  //   try {
  //     const res = await super.getList(filters, { password: 0 }, [
  //       {
  //         fieldForPopulation: {
  //           path: 'type',
  //           match: { title: { $ne: 'admin' } },
  //           select: 'title',
  //         },
  //       },
  //     ])
  //     return res.filter((user) => user.type !== null)
  //   } catch (error) {
  //     return []
  //   }
  // }

  async getListForFilter(filters) {
    try {
      const res = await super.getList(filters, { password: 0 }, [
        {
          fieldForPopulation: {
            path: 'type',
            match: { title: { $ne: 'admin' } },
            select: 'title',
          },
        },
      ])
      return res
    } catch (error) {
      return []
    }
  }
}

export default new UsersDBService(User)
