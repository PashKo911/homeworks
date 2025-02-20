<template>
	<div class="container">
		<ul class="list">
			<li class="item">
				<router-link class="link" :to="{ name: 'home' }"> При отриманні </router-link>
			</li>
			<li class="item">
				<router-link class="link" :to="{ name: 'home' }"> Переказ на картку </router-link>
			</li>
			<li class="item">
				<router-link class="link" :to="{ name: 'home' }"> Записати у зошит </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'PaymentView',
}
</script>

<style lang="scss" scoped>
.container {
}
.list {
	display: grid;
	gap: toRem(10);
	place-items: center;
}
.item {
}
.link {
	@media (any-hover: hover) {
		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
