import { readFileSync, writeFileSync } from 'fs'

export class TaskCollection {
  constructor(filename) {
    this.filename = filename
    this.tasks = this.loadTasks()
  }
  loadTasks() {
    try {
      const data = readFileSync(this.filename, 'utf8')
      return JSON.parse(data)
    } catch (err) {
      return {}
    }
  }
  saveTasks() {
    writeFileSync(this.filename, JSON.stringify(this.tasks))
  }
  addTask(name) {
    if (this.tasks[name]) {
      this.tasks[name]++
    } else {
      this.tasks[name] = 1
    }
    this.saveTasks()
  }
  removeTask(name) {
    if (this.tasks[name]) {
      this.tasks[name]--
      if (this.tasks[name] === 0) {
        delete this.tasks[name]
      }
      this.saveTasks()
    }
  }
  getTasks() {
    return this.tasks
  }
}
