<template>
	<div class="container">
		<h2 class="title">Нас дуже легко знайти:</h2>
		<ol class="list">
			<li class="item">Потягом до Ужгорода</li>
			<li class="item">Шукаєте бабу Галю (вона дорогу покаже)</li>
		</ol>
		<h2 class="title">До зустрічі!!!</h2>
	</div>
</template>

<script>
export default {
	name: 'ContactsView',
}
</script>

<style lang="scss" scoped>
.container {
	display: grid;
	gap: toRem(15);
}
.title {
	font-weight: 500;
	@include adaptiveValue('font-size', 24, 18);
}
.list {
	padding-left: toRem(15);
}
.item {
	list-style: inherit;
	list-style-position: inside;
}
</style>
