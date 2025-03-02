import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import lessonsRoutes from './routes/lessonsRoutes'
import store from '@/store'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: { requiresAuth: false },
		},
		...lessonsRoutes,
		{
			path: '/teachers',
			name: 'teachers',
			component: () => import('@/views/TeachersView.vue'),
			meta: { requiresAuth: false },
		},
		{
			path: '/auth',
			name: 'auth',
			component: () => import('@/views/AuthView.vue'),
			meta: { requiresAuth: false },
		},
		{
			path: '/:pathMath(.*)*',
			name: 'notFound',
			component: () => import('@/views/NotFoundView.vue'),
			meta: { requiresAuth: false },
		},
	],
})

router.beforeEach((to) => {
	if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
		return {
			name: 'auth',
			query: { redirect: to.fullPath },
		}
	}
})

export default router
