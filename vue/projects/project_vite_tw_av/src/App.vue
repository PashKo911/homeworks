<template>
	<div class="main-container">
		<h1 class="title font-semibold leading-[1.1]">
			Задача 1. Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні
			модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150). При
			заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше –
			оранжевий).
		</h1>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-container {
	@include adaptiveValue('padding-top', 100, 50);
}
.title {
	@include adaptiveValue('font-size', 42, 24);
	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 32, 16);
	}
}
</style>
