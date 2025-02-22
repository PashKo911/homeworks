import FiltersHelper from '../../../utils/searchHelpers/FiltersHelper.mjs'

class MongooseCRUDManager {
  constructor(model) {
    // Ініціалізація моделі Mongoose
    this.model = model
  }

  async findOneWithSearchOptionsFromQuery(
    reqQuery, // Запит клієнта з параметрами пошуку
    fieldsConfiguration, // Конфігурація доступних полів для пошуку
    projection = null, // Поля, які слід включити/виключити у результаті
    populateFields = [] // Поля, які слід заповнити зв'язаними даними
  ) {
    try {
      // Створення базового запиту для пошуку одного документу
      let query = this.model.findOne({}, projection)

      // Застосування фільтрів пошуку з reqQuery за допомогою FiltersHelper
      query = FiltersHelper.applyFindOptionsFromQuery(
        reqQuery,
        fieldsConfiguration
      )

      // Додавання опцій populate для зв'язків
      this.addPopulationOptions(query, populateFields)

      // Виконання запиту та повернення знайденого документу
      const document = await query.exec()
      return document
    } catch (error) {
      throw new Error('Помилка отримання даних: ' + error.message)
    }
  }

  async findManyWithSearchOptions(
    reqQuery, // Запит клієнта
    fieldsConfiguration, // Конфігурація доступних полів для пошуку
    projection = null, // Поля для включення/виключення
    populateFields = [] // Поля для заповнення
  ) {
    try {
      // Створення базового запиту для пошуку багатьох документів
      let query = this.model.find({}, projection)

      // Застосування фільтрів пошуку з reqQuery та налаштувань полів за допомогою FiltersHelper
      query = FiltersHelper.applyFiltersOptionsFromQuery(
        reqQuery,
        fieldsConfiguration,
        query
      )

      // Підрахунок кількості документів, що відповідають фільтрам
      const count = await this.model.countDocuments(query)

      // Застосування додаткових дій до запиту з reqQuery та налаштувань полів за допомогою FiltersHelper
      query = FiltersHelper.applyActionsOptionsFromQuery(
        reqQuery,
        fieldsConfiguration,
        query
      )

      // Додавання опцій populate для зв'язків
      this.addPopulationOptions(query, populateFields)

      // Виконання запиту та повернення знайдених документів разом з їхньою кількістю
      const documents = await query.exec()

      return { documents, count }
    } catch (error) {
      throw new Error('Помилка отримання даних: ' + error.message)
    }
  }

  // Додавання опцій populate для зв'язків
  addPopulationOptions(query, populateFields) {
    populateFields.forEach((field) => {
      if (typeof field === 'string') {
        // Якщо поле передано як рядок - populate за цим полем
        query = query.populate(field)
      } else if (
        typeof field === 'object' &&
        field.fieldForPopulation &&
        field.requiredFieldsFromTargetObject
      ) {
        // Якщо передано об'єкт з полем для populate та необхідними полями з цільової моделі
        if (typeof field.fieldForPopulation === 'object') {
          query = query.populate(field.fieldForPopulation)
        } else {
          query = query.populate(
            field.fieldForPopulation,
            field.requiredFieldsFromTargetObject
          )
        }
      }
    })
  }

  // Отримання всього списку документів з фільтрами, projection і populateFields
  async getList(filters = {}, projection = null, populateFields = []) {
    try {
      // Створення базового запиту для пошуку всіх документів
      let query = this.model.find(filters, projection)

      // Додавання опцій populate для зв'язків
      this.addPopulationOptions(query, populateFields)

      // Виконання запиту та повернення знайдених документів, перетворених на звичайні JavaScript об'єкти
      const results = await query.exec()
      return results.map((doc) => doc.toObject())
    } catch (error) {
      throw new Error('Помилка отримання даних: ' + error.message)
    }
  }

  // Створення об'єкта і збереження у базі
  async create(data) {
    try {
      const newItem = new this.model(data)
      return await newItem.save() // Збереження у базі
    } catch (error) {
      throw new Error('Error creating data: ' + error.message)
    }
  }

  // Пошук за id з використанням populateFields
  async getById(id, populateFields = [], projection = null) {
    try {
      let query = this.model.findById(id, projection)
      populateFields.forEach((field) => {
        query = query.populate(field)
      })
      return await query.exec() // Виконання запиту
    } catch (error) {
      throw new Error('Error finding data by id: ' + error.message)
    }
  }

  // Пошук одного за фільтром
  async findOne(filters = {}, projection = null, populateFields = []) {
    try {
      let query = this.model.findOne(filters, projection)
      populateFields.forEach((field) => {
        if (typeof field === 'string') {
          // Якщо поле передано як рядок
          query = query.populate(field)
        } else if (
          typeof field === 'object' &&
          field.fieldForPopulation &&
          field.requiredFieldsFromTargetObject
        ) {
          // Якщо передано об'єкт з полем для заповнення та запитуваними полями
          query = query.populate(
            field.fieldForPopulation,
            field.requiredFieldsFromTargetObject
          )
        }
      })
      return await query.exec()
    } catch (error) {
      throw new Error('Error finding data by id: ' + error.message)
    }
  }

  // Оновлення документа за id
  async update(id, data) {
    try {
      return await this.model
        .findByIdAndUpdate(id, data, { new: true, runValidators: true })
        .exec()
    } catch (error) {
      throw new Error('Error updating data: ' + error.message)
    }
  }

  // Видалення документа за id
  async deleteById(id) {
    try {
      return await this.model.findByIdAndDelete(id).exec()
    } catch (error) {
      throw new Error('Error deleting data: ' + error.message)
    }
  }
}

export default MongooseCRUDManager
