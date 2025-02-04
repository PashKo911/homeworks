<template>
	<div class="main-container min-h-svh">
		<h1 class="title font-semibold leading-[1.1]">
			Задача 1. Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні
			модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150). При
			заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше –
			оранжевий).
		</h1>
		<layout-component />
	</div>
</template>

<script>
import LayoutComponent from './components/Layout/LayoutComponent.vue'
export default {
	name: 'App',
	components: {
		LayoutComponent,
	},
}
</script>

<style lang="scss" scoped>
.main-container {
	@include adaptiveValue('padding-top', 100, 50);
	@include adaptiveValue('padding-bottom', 100, 50);
}
.title {
	@include adaptiveValue('font-size', 42, 24);
	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 32, 16);
	}
}
</style>
