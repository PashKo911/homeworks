<template>
	<button type="button" class="button" @click="onClick">
		<slot> Submit </slot>
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
	methods: {
		onClick() {
			this.$emit('onClick')
		},
	},
}
</script>

<style lang="scss" scoped>
.button {
	padding: toRem(10) toRem(20);
	background-color: var(--main-color);
	border-radius: toRem(8);
	display: flex;
	justify-content: center;
	align-items: center;
	width: max-content;
	color: var(--light-text);
	transition: background-color 0.2s;
	font-weight: 500;

	@media (any-hover: hover) {
		&:hover {
			background-color: var(--hover-color);
		}
	}

	&:disabled {
		background-color: var(--color-gray-400);
		color: var(--color-gray-100);
		cursor: inherit;
	}
}
</style>
