<template>
	<layout-with-gallery>
		<div class="container">
			<h1 class="title">Правила купівлі:</h1>
			<ul class="list">
				<li class="item">Купуємо багато</li>
				<li class="item">Платимо швидко</li>
				<li class="item">Насолоджуємось товаром</li>
			</ul>
		</div>
	</layout-with-gallery>
</template>

<script>
import LayoutWithGallery from '@/components/layouts/LayoutWithGallery.vue'
export default {
	name: 'RulesView',
	components: {
		LayoutWithGallery,
	},
}
</script>

<style lang="scss" scoped>
.container {
	@include adaptiveValue('margin-bottom', 150, 50);
}
h1.title {
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
.list {
	display: grid;
	gap: toRem(10);
}
.item {
	list-style: square;
	list-style-position: inside;
}
</style>
