<template>
	<div class="d-flex">
		<div>
			<label>
				Title
				<input type="text" v-model.lazy="queryOptData.productTitle" />
			</label>
		</div>
		<div>
			<label>
				Order
				<select v-model="queryOptData.orderType">
					<option value="asc">За зростанням</option>
					<option value="desc">За спаданянм</option>
				</select>
			</label>
		</div>
	</div>
	<hr />
	<h2>Список продуктів</h2>
	<products-layout>
		<div v-for="item in getItemsList" :key="item.id" class="d-flex">
			<div>
				<router-link
					:to="{
						name: 'product-detail',
						params: {
							id: item.id,
						},
					}"
					>{{ item.title }}</router-link
				>
				-
				<span>{{ item.price }}</span>
			</div>
			<div>
				<router-link
					:to="{
						name: 'product-edit',
						params: {
							id: item.id,
						},
					}">
					Edit
				</router-link>
				<button @click="deleteItem(item.id)">Delete</button>
			</div>
		</div>
		<hr />
		<router-link
			:to="{
				name: 'product-edit',
			}"
			>Додати товар</router-link
		>
	</products-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import { mapGetters, mapActions } from 'vuex'
import ProductsLayout from '@/layouts/ProductsLayout.vue'

export default {
	components: { MainLayout, ProductsLayout },
	name: 'ProductsView',
	computed: {
		...mapGetters('products', ['getItemsList']),
		queryOptions() {
			return {
				orderBy: 'price',
				orderType: this.queryOptData.orderType,
			}
		},
	},

	data() {
		return {
			queryOptData: {
				orderType: null,
				productTitle: null,
			},
		}
	},

	watch: {
		queryOptData: {
			handler() {
				this.loadData()
			},
			deep: true,
		},
	},

	methods: {
		...mapActions('products', ['loadList', 'addItem', 'deleteItem', 'updateItem', 'loadFilteredData']),

		loadData() {
			if (this.queryOptData.productTitle)
				this.loadFilteredData({
					fieldTitle: 'title',
					compareOperator: '==',
					valueToCompare: this.queryOptData.productTitle,
					options: this.queryOptions,
				})
			else this.loadList(this.queryOptions)
		},
	},

	created() {
		this.loadList()
	},
}
</script>

<style lang="scss" scoped>
.d-flex {
	display: flex;
	justify-content: space-between;
}
</style>
