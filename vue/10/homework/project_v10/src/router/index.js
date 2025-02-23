import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DriversView from '@/views/drivers/DriversView.vue'
import DriversForm from '@/views/drivers/DriversForm.vue'
import BusesView from '@/views/buses/BusesView.vue'
import BusForm from '@/views/buses/BusForm.vue'
import AssignmentView from '@/views/assignment/AssignmentView.vue'
import ContactsView from '@/views/ContactsView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/drivers',
			name: 'drivers',
			component: DriversView,
		},
		{
			path: '/drivers_form/:driversId?',
			name: 'driversForm',
			component: DriversForm,
		},
		{
			path: '/buses',
			name: 'buses',
			component: BusesView,
		},
		{
			path: '/bus_form/:busId?',
			name: 'busForm',
			component: BusForm,
		},
		{
			path: '/assignment',
			name: 'assignment',
			component: AssignmentView,
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsView,
		},
	],
})

export default router
