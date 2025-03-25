import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
			meta: {
				localeName: 'menu.home',
			},
		},
		{
			path: '/products',
			name: 'products',
			component: () => import('@/pages/products/ProductsPage.vue'),
			meta: {
				localeName: 'menu.products',
			},
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: () => import('@/pages/ContactsPage.vue'),
			meta: {
				localeName: 'menu.contacts',
			},
		},
	],
})

// router.beforeEach(async (to) => {
// 	if (to.meta?.requireAuth) {
// 		let isAuthenticated = store.state.auth.user

// 		if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')

// 		if (!isAuthenticated)
// 			return {
// 				name: 'login',
// 			}
// 	}
// })

export default router
