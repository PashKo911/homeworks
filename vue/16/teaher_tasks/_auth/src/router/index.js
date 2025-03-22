import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyContacts from '../views/MyContacts.vue'
import LoginPage from '../views/LoginPage.vue'

import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      requireAuth: true,
    },
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requireAuth: false,
    },
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      requireAuth: false,
    },
    component: MyContacts,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false,
    },
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

router.beforeEach(async (to) => {
  if (to.meta?.requireAuth) {
    let isAuthenticated = store.state.auth.user

    if (!isAuthenticated)
      isAuthenticated = await store.dispatch('auth/loginWithCredential')

    if (!isAuthenticated)
      return {
        name: 'login',
      }
  }
})

export default router
