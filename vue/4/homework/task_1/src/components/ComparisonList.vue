<template>
	<h2>Списки порівнянь</h2>

	<div class="wrapper">
		<h3>Мобільні телефони</h3>
		<h4>Кількість товарів: {{ products.length }}</h4>
		<div class="list">
			<comparison-product
				v-for="product in products"
				:key="product.id"
				:img-path="product.imgPath"
				:link="product.link" />
		</div>
	</div>
</template>

<script>
import ComparisonProduct from './ComparisonProduct.vue'

const products = [
	{
		id: '1',
		imgPath: require('@/assets/img/comparison/1.webp'),
		link: 'https://rozetka.com.ua/ua/apple-myng3sx-a/p448744745/',
	},
	{
		id: '2',
		imgPath: require('@/assets/img/comparison/2.webp'),
		link: 'https://rozetka.com.ua/ua/apple-myng3sx-a/p448744745/',
	},
	{
		id: '3',
		imgPath: require('@/assets/img/comparison/3.webp'),
		link: 'https://rozetka.com.ua/ua/apple-myng3sx-a/p448744745/',
	},
]

export default {
	name: 'ComparisonList',
	components: {
		ComparisonProduct,
	},
	data() {
		return {
			products,
		}
	},
}
</script>

<style lang="css" scoped>
.wrapper {
	border: 0.0625rem solid gray;
	border-radius: 0.9375rem;
	padding: 1.875rem;
}
.list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.875rem;
}

h4 {
	margin-bottom: 2.5rem;
}
</style>
