import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FirstTask from '@/components/Tasks/Task1/FirstTask.vue'
import SecondTask from '@/components/Tasks/Task2/SecondTask.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/first-task',
			name: 'first-task',
			component: FirstTask,
		},
		{
			path: '/second-task',
			name: 'second-task',
			component: SecondTask,
		},
	],
})

export default router
