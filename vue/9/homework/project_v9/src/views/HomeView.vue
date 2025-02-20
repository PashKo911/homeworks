<template>
	<div class="container">
		<h1 class="title">Це магазин належить програмісту на фрілансі.</h1>
		<h2 class="subtitle">Тому:</h2>
		<ul class="list">
			<li class="item">Магазин працює коли хоче;</li>
			<li class="item">Товари надсилає швидко;</li>
			<li class="item">На запитання відповідає коли виспиться;</li>
		</ul>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
}
.title {
	text-align: center;
	font-weight: 600;
	@include adaptiveValue('font-size', 32, 24);

	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
.subtitle {
	font-weight: 500;
	@include adaptiveValue('font-size', 24, 18);
	&:not(:last-child) {
		margin-bottom: toRem(15);
	}
}
.list {
	display: grid;
	gap: toRem(5);
}
.item {
	display: flex;
	align-items: center;
	gap: toRem(5);
	&::before {
		content: '➤';
	}
}
</style>
