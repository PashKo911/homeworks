<template>
	<div class="container">
		<h1 class="title">Hello</h1>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style lang="scss" scoped>
.container {
	@include adaptiveValue('padding-top', 80, 40);
	@include adaptiveValue('padding-bottom', 80, 40);

	@media (max-width: $mobile) {
		background-color: #000;
	}
}
.title {
	font-weight: 600;
	line-height: 1.1;
	@include adaptiveValue('font-size', 32, 24);
	&:not(:last-child) {
		@include adaptiveValue('margin-bottom', 82, 30);
	}
}
</style>
