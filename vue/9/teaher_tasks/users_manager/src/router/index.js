import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UsersList from '../views/UsersList.vue'
import UserPage from '../views/UserPage.vue'
import EditUserPage from '../views/EditUserPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/users/:userId',
        name: 'user',
        component: UserPage,
    },
    {
        path: '/users',
        name: 'users',
        component: UsersList,
    },
    {
        path: '/user-edit/:userId?',
        name: 'edit',
        component: EditUserPage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
})

export default router
