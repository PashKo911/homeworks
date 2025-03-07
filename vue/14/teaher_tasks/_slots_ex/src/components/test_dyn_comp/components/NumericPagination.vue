<template>
	<div class="pages-buttons">
		<slot name="footer" :pagesNumber="pagesNumber" :currentPage="currentPage">
			<button
				v-for="pageNum in pagesNumber"
				:key="pageNum"
				class="button"
				:disabled="pageNum === currentPage"
				@click="onSelectPage(pageNum)">
				{{ pageNum }}
			</button>
		</slot>
	</div>
</template>

<script>
export default {
	name: 'NumericPagination',
	props: {
		pagesNumber: {
			type: Number,
			required: true,
		},
		currentPage: {
			type: Number,
			required: true,
		},
	},
	methods: {
		onSelectPage(pageNum) {
			this.$emit('onSelectPage', pageNum)
		},
	},
}
</script>
