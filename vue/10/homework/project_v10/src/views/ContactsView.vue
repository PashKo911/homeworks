<template>
	<div class="container">
		<h2 class="title">Don't call me please :)</h2>
	</div>
</template>

<script>
export default {
	name: 'ContactsView',
}
</script>

<style lang="scss" scoped>
.title {
	font-weight: 500;
	text-align: center;
	@include adaptiveValue('font-size', 24, 18);
}
</style>
