import { EventEmitter } from 'events'

export class TaskManager extends EventEmitter {
  constructor() {
    super()
  }

  addTask(taskName) {
    console.log(`Task added: ${taskName} `)
    this.emit('taskAdded', taskName)
  }

  removeTask(taskName) {
    console.log(`Task removed: ${taskName}`)
    this.emit('taskRemoved', taskName)
  }
}
