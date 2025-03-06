<template>
	<layout-with-gallery>
		<div class="container">
			<div class="content">
				<h1 class="title">Наші контакти:</h1>
				<h2 class="title">Адреса магазину: біля будинку Баби Галі</h2>
				<h2 class="title">Менеджер: Дід Петро</h2>
				<h2 class="title">Заступник: онука Софійка</h2>
			</div>
		</div>
	</layout-with-gallery>
</template>

<script>
export default {
	name: 'ContactsView',
}
</script>

<style lang="scss" scoped>
.container {
}
.content {
	@include adaptiveValue('margin-bottom', 150, 50);
}
h1.title {
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}

h2.title {
	&:not(:last-child) {
		margin-bottom: toRem(10);
	}
}
</style>
