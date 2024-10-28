import { TaskCollection } from './TaskCollection.mjs'
import { TaskManager } from './TaskManager.mjs'

// Створення екземпляру TaskCollection
const taskCollection = new TaskCollection('tasks.json')
// Створення екземпляру TaskManager
const taskManager = new TaskManager()

// Прослуховувачі подій для зберігання змін у JSON файлі
taskManager.on('taskAdded', (taskName) => {
  taskCollection.addTask(taskName)
})

taskManager.on('taskRemoved', (taskName) => {
  taskCollection.removeTask(taskName)
})

// Приклад використання
taskManager.addTask('Task 1')
taskManager.addTask('Task 1')
taskManager.addTask('Task 1')
taskManager.removeTask('Task 1')
taskManager.addTask('Task 2')
taskManager.addTask('Task 2')
