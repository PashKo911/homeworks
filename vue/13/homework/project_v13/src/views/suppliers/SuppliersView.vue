<template>
	<main-layout>
		<div class="container wrapper">
			<h1 class="title">Оберіть постачальника</h1>
			<suppliers-list />
		</div>
		<template #footer-left>
			<div class="title">Найбільш популярний: <span class="green">Економ</span></div>
		</template>
	</main-layout>
</template>

<script>
import SuppliersList from './SuppliersList.vue'
export default {
	components: { SuppliersList },
	name: 'SuppliersView',
}
</script>

<style lang="scss" scoped>
h1.title {
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
.green {
	color: rgb(46, 239, 69);
}
</style>
