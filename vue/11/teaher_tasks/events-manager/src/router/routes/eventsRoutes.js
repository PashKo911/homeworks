import EventsList from '../../views/events/EventsList.vue'
import EventDetail from '../../views/events/EventDetail.vue'
import EventEdit from '../../views/events/EventEdit.vue'

export default [
  {
    path: '/events/edit/:id?',
    name: 'eventEdit',
    component: EventEdit,
  },
  {
    path: '/events/detail/:id',
    name: 'eventDetail',
    component: EventDetail,
  },
  {
    path: '/events',
    name: 'eventsList',
    component: EventsList,
  },
]
