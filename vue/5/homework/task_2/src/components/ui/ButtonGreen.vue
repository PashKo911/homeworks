<template>
	<button class="button" @click="onSubmit">
		{{ title }}
	</button>
</template>

<script>
export default {
	name: 'ButtonComponent',
	props: {
		title: {
			type: String,
			default: 'Button',
		},
	},
	methods: {
		onSubmit() {
			this.$emit('submit')
		},
	},
}
</script>

<style lang="scss" scoped>
.button {
	padding: 0.625rem 1.25rem;
	background-color: #00a046;
	font-size: 1.25rem;
	transition: background-color 0.2s;
	border-radius: 0.5rem;
	color: #fff;
	text-transform: capitalize;

	@media (any-hover: hover) {
		&:hover {
			background-color: #00bc52;
		}
	}
}
</style>
