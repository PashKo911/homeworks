import StudentsList from '../../views/students/StudentsList.vue'
import StudentDetail from '../../views/students/StudentDetail.vue'
import StudentEdit from '../../views/students/StudentEdit.vue'

export default [
  {
    path: '/students/edit/:id?',
    name: 'studentEdit',
    component: StudentEdit,
  },
  {
    path: '/students/detail/:id',
    name: 'studentDetail',
    component: StudentDetail,
  },
  {
    path: '/students',
    name: 'studentsList',
    component: StudentsList,
  },
]
