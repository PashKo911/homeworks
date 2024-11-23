import Course from './Course.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'

class CoursesDBService extends MongooseCRUDManager {
	async getList(filters) {
		try {
			const courses = await super.getList(filters, null, null, [
				{
					fieldForPopulation: 'students',
					requiredFieldsFromTargetObject: 'name',
				},
				{
					fieldForPopulation: 'seminars.responsible',
					requiredFieldsFromTargetObject: 'name',
				},
			])
			return courses
		} catch (error) {
			return []
		}
	}
}

export default new CoursesDBService(Course)
