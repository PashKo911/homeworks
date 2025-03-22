<template>
	<div
		class="fixed bg-black/20 inset-0 z-50 backdrop-blur-sm grid place-items-center transition-colors duration-500"
		v-show="loading">
		<ProgressSpinner v-show="loading" />
	</div>
</template>

<script>
export default {
	name: 'PageLoader',
	props: {
		loading: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
}
</script>
