<template>
	<button :disabled="currentPage === 1" @click="onSelectPage(-1)">
		{{ `<=` }}
	</button>
	<button :disabled="currentPage === pagesNumber" @click="onSelectPage(1)">
		{{ `=>` }}
	</button>
</template>

<script>
export default {
	name: 'ArrowPagination',
	props: {
		currentPage: {
			type: Number,
			required: true,
		},
		pagesNumber: {
			type: Number,
			required: true,
		},
	},
	methods: {
		onSelectPage(num) {
			const newPage = this.currentPage + num
			this.$emit('onSelectPage', newPage)
		},
	},
}
</script>

<style lang="scss" scoped></style>
