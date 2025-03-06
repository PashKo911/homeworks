<template>
	<div class="items">
		<card-comp v-for="s in suppliersList" :key="s.id" :productData="s" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardComp from '@/components/cards/CardComp.vue'
export default {
	components: { CardComp },
	name: 'SuppliersList',
	computed: {
		...mapGetters(['suppliersList']),
	},
}
</script>

<style lang="scss" scoped>
.items {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(toRem(260), 1fr));
	gap: toRem(30);
}
</style>
