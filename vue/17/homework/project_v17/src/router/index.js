import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/friends',
			name: 'friends',
			component: () => import('@/pages/FriendsPage.vue'),
		},
		{
			path: '/gifts',
			name: 'gifts',
			component: () => import('@/pages/GiftsPage.vue'),
		},
		{
			path: '/assignments',
			name: 'assignments',
			component: () => import('@/pages/AssignmentsPage.vue'),
		},
	],
})

export default router
