<template>
	<div class="main-container">
		<h1 class="title font-semibold leading-[1.1]">
			Задача 5. Спробуйте відтворити фрагмент. Компонент ProductsFilters через v-model повертає 2 значення
			фільтра: продавець, бренд. При заданні модифікатора “check” відображати секцію зеленою рамкою, якщо
			фільтр з відповідної секції (продавець чи бренд) не обрано.
		</h1>
		<layout-component />
	</div>
</template>

<script>
import LayoutComponent from './components/Layout/LayoutComponent.vue'
export default {
	name: 'Layout component',
	components: { LayoutComponent },
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
