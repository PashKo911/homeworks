<template>
	<div class="wrapper">
		<h3>Останні переглянуті товари</h3>
		<div class="list">
			<last-reviewed-product v-for="product in products" :key="product.id" :product="product" />
		</div>
	</div>
</template>

<script>
import LastReviewedProduct from './LastReviewedProduct.vue'

const products = [
	{
		name: 'Планшет Apple iPad 10.9" 2024 Wi-Fi 64GB',
		price: 18499,
		availability: true,
		imgPath: require('@/assets/img/reviewed/1.webp'),
		link: 'https://rozetka.com.ua/ua/planshet-apple-ipad-109-2022-wi-fi-64gb/g46864788/',
	},
	{
		name: 'Зарядна станція EcoFlow DELTA 2 / 1800 Вт / 1024 Вт⋅год / LiFePO4 (ZMR330-EU)',
		price: 42999,
		availability: true,
		imgPath: require('@/assets/img/reviewed/2.webp'),
		link: 'https://rozetka.com.ua/ua/ecoflow-zmr330-eu/p358914504/',
	},
	{
		name: 'Навушники Apple AirPods Pro with MagSafe Case USB-C (2-ге покоління) (MTJV3TY/A)',
		price: 12599,
		availability: false,
		imgPath: require('@/assets/img/reviewed/3.webp'),
		link: 'https://rozetka.com.ua/ua/apple-mtjv3ty-a/p395744181/',
	},
]
export default {
	components: { LastReviewedProduct },
	name: 'LastReviewedList',
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
h3 {
	margin-bottom: 2.5rem;
}
</style>
