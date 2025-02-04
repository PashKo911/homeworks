<template>
	<div class="main-container min-h-svh">
		<h1 class="title font-semibold leading-[1.1]">
			Задача 4. Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні
			відповідних модифікаторів відповідних полів input:
		</h1>
		<ul class="list-disc">
			<li>ім’я користувача - у випадку порожнього поля (червони фон)</li>
			<li>вік (вік менший за 18 – колір фону червоний, інакше – зелений).</li>
		</ul>
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
		@include adaptiveValue('margin-bottom', 30, 15);
	}
}
ul {
	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 82, 30);
	}
}
</style>
