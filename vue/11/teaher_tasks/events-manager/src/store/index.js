import { createStore } from 'vuex'
import students from './modules/students'
import events from './modules/events'

// Create a new store instance.
const store = createStore({
  modules: {
    students,
    events,
  },
})

export default store
