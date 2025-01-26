<template>
	<div class="wrapper">
		<h2>{{ message.userMessage }}</h2>
		<button @click="onLike">Like</button>
		<button :disabled="isNegativeLikesNumber" @click="onDislike">Dislike</button>
		<div>Likes: {{ message.likes }}</div>
	</div>
</template>

<script>
export default {
	name: 'UserMessageItem',
	props: {
		message: {
			type: Object,
			default: () => ({}),
		},
	},
	methods: {
		onLike() {
			this.$emit('like', { id: this.message.id, num: 1 })
		},
		onDislike() {
			this.$emit('like', { id: this.message.id, num: -1 })
		},
	},
	computed: {
		isNegativeLikesNumber() {
			return this.message && this.message.likes <= 0
		},
	},
}
</script>

<style lang="css" scoped>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.9375rem;
}
</style>
