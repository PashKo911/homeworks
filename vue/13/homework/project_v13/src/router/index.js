import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/products/ProductsView.vue'
import ProductsFilter from '@/views/products/ProductsFilter.vue'
import ProductsForm from '@/views/products/ProductsForm.vue'
import SuppliersView from '@/views/suppliers/SuppliersView.vue'
import ContactsView from '@/views/ContactsView.vue'
import RulesView from '@/views/RulesView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/products',
			name: 'products',
			component: ProductsView,
			children: [
				{
					path: 'selector',
					name: 'selector',
					components: {
						filter: ProductsFilter,
					},
				},
				{
					path: 'editor',
					name: 'editor',
					components: {
						form: ProductsForm,
					},
				},
			],
		},
		{
			path: '/suppliers',
			name: 'suppliers',
			component: SuppliersView,
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsView,
		},
		{
			path: '/shopping_rules',
			name: 'rules',
			component: RulesView,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notFound',
			component: NotFoundView,
		},
	],
})

export default router
