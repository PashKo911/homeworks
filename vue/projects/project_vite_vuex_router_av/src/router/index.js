import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: { requiresAuth: false },
		},
	],
})

// router.beforeEach((to) => {
// 	if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
// 		return {
// 			name: 'auth',
// 			query: { redirect: to.fullPath },
// 		}
// 	}
// })

export default router
