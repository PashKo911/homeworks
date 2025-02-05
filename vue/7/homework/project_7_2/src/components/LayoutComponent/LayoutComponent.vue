<template>
	<div class="container">
		<div class="top">
			<h1 class="title">Вітаємо на нашому сайті</h1>
			<select class="select" v-model="currentCurrency">
				<option v-for="(value, key) in exchangeRateObj" :value="key" :key="key">
					{{ key.toUpperCase() }} {{ value.symbol }}
				</option>
			</select>
		</div>
		<products-list class="products" />
		<curt v-show="cartList.length" />
	</div>
</template>

<script>
import ProductsList from '../ProductsList/ProductsList.vue'
import { mapActions, mapGetters } from 'vuex'
import Curt from '../Curt/Curt.vue'
export default {
	name: 'LayoutComponent',
	components: { ProductsList, Curt },
	methods: {
		...mapActions(['doneCurrency']),
	},
	computed: {
		...mapGetters(['selectedCurrency', 'exchangeRateObj', 'cartList']),
		currentCurrency: {
			get() {
				return this.selectedCurrency
			},
			set(newVal) {
				this.doneCurrency(newVal)
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	@include adaptiveValue('padding-top', 80, 40);
	@include adaptiveValue('padding-bottom', 80, 40);
}
.top {
	display: flex;
	justify-content: center;
	align-items: center;
	@include adaptiveValue('column-gap', 80, 40);

	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 40, 20);
	}
}

.select {
	border: 0.0625rem solid var(--color-black);
	border-radius: 0.25rem;
	padding: 0.25rem 0;
	min-width: 6.25rem;
}

.title {
	font-weight: 600;
	line-height: 1.1;
	text-align: center;
	@include adaptiveValue('font-size', 32, 24);
}
.products {
	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 80, 40);
	}
}
</style>
