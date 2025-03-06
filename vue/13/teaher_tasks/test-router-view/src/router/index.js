import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainFirst from '../views/MainFirst.vue'
import AsideFirst from '../views/AsideFirst.vue'
import MainSecond from '../views/MainSecond.vue'
import AsideSecond from '../views/AsideSecond.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test1',
      name: 'test1',
      components: {
        default: MainFirst,
        aside: AsideFirst,
      },
    },
    {
      path: '/test2',
      name: 'test2',
      components: {
        default: MainSecond,
        aside: AsideSecond,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
