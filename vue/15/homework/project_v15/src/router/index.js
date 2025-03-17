import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
			meta: {
				showInNavMenu: true,
			},
		},
		{
			path: '/drivers',
			name: 'drivers',
			component: () => import('@/pages/drivers/DriversPage.vue'),
			meta: {
				showInNavMenu: true,
			},
		},
		{
			path: '/buses',
			name: 'buses',
			component: () => import('@/pages/buses/BusesPage.vue'),
			meta: {
				showInNavMenu: true,
			},
		},
		{
			path: '/assignment',
			name: 'assignment',
			component: () => import('@/pages/assignments/AssignmentPage.vue'),
			meta: {
				showInNavMenu: true,
			},
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: () => import('@/pages/ContactsPage.vue'),
			meta: {
				showInNavMenu: true,
			},
		},
	],
})

export default router
