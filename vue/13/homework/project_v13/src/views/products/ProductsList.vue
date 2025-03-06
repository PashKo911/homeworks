<template>
	<div class="items">
		<card-comp v-for="p in productsList" :key="p.id" :productData="p">
			<h2 class="price">{{ p.price }} грн.</h2>
		</card-comp>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardComp from '@/components/cards/CardComp.vue'

export default {
	components: { CardComp },
	name: 'ProductsList',
	computed: {
		...mapGetters(['productsList']),
	},
}
</script>

<style lang="scss" scoped>
::v-deep(.img) {
	object-fit: cover;
}

.items {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(toRem(260), 1fr));
	place-content: center;
	gap: toRem(30);
}

.price {
	font-weight: 600;
	color: #990000;
	@include adaptiveValue('font-size', 22, 18);
}
</style>
