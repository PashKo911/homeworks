<template>
	<footer class="footer">
		<div class="container">
			<slot name="footer-left">
				<div class="rating">Рейтинг магазину: 54449</div>
			</slot>
			<slot name="footer">
				<div class="status">Статус: <span class="green">відкрито</span></div>
			</slot>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FooterComp',
}
</script>

<style lang="scss" scoped>
.footer {
	background-color: var(--main-color);
	box-shadow: 0 -0.25rem 0.625rem rgba(0, 0, 0, 0.2);
	padding: 0.625rem 0;
}
.container {
	display: flex;
	gap: toRem(30);
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	color: var(--light-text);

	@media (max-width: $mobile) {
		justify-content: center;
	}
}

.green {
	color: rgb(46, 239, 69);
}
.link {
	text-decoration: underline;
}
</style>
