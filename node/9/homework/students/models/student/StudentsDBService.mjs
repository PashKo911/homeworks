import Student from './Student.mjs'
import MongooseCRUDManager from '../MongooseCRUDManager.mjs'

class StudentsDBService extends MongooseCRUDManager {}

export default new StudentsDBService(Student)
