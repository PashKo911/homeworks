<template>
	<div class="main-container min-h-svh">
		<h1 class="title font-semibold leading-[1.1]">
			Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що
			закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо
			шлях некоректний.
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
		@include adaptiveValue('margin-bottom', 82, 30);
	}
}
</style>
