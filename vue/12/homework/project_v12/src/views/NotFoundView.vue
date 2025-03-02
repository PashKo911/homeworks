<template>
	<div class="container">
		<h1 class="title">40<span>4</span></h1>
		<h2 class="title">Oops! Page not found</h2>
		<div class="text">The page you are looking for might have been removed or temporarily unavailable.</div>
		<base-button @on-click="onClick"> Back to HomePage </base-button>
	</div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
export default {
	name: 'NotFoundView',
	components: {
		BaseButton,
	},
	methods: {
		onClick() {
			this.$router.push({
				name: 'home',
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: grid;
	gap: toRem(30);
	place-items: center;
}
h1.title {
	font-weight: 600;
	text-align: center;
	color: rgb(103, 25, 25);
	@include adaptiveValue('font-size', 240, 120);

	span {
		display: inline-block;
		transform: rotate(15deg);
	}
}
h2.title {
	margin-bottom: 0;
}
.text {
	max-width: toRem(500);
	text-align: center;
}
</style>
