<template>
	<div>
		<label>
			<input type="text" placeholder="Type a new message" v-model.trim="userMessage" />
		</label>
		<button :disabled="!userMessage" @click="onSend">Send</button>
	</div>
</template>

<script>
export default {
	name: 'SendInput',
	data() {
		return {
			userMessage: null,
		}
	},
	methods: {
		onSend() {
			this.$emit('send', this.userMessage)
			this.userMessage = null
		},
	},
	computed: {
		isEmptyMessage() {
			return this.userMessage
		},
	},
}
</script>

<style lang="scss" scoped></style>
