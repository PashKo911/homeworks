<template>
	<main-layout>
		<div class="container wrapper">
			<h1 class="title">Оберіть продукти</h1>

			<router-view name="filter" />

			<products-list class="products" />

			<router-view name="form" />
		</div>
	</main-layout>
</template>
<script>
import ProductsList from './ProductsList.vue'
export default {
	components: { ProductsList },
	name: 'ProductsView',
}
</script>

<style lang="scss" scoped>
.products {
	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 60, 40);
	}
}

.title {
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
</style>
