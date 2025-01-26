<template>
	<div>
		<user-message-item
			v-for="message in messagesList"
			:key="message.id"
			:message="message"
			@like="onChangeLike" />
		<send-input @send="onSend" />
	</div>
</template>

<script>
import SendInput from './SendInput.vue'

import UserMessageItem from './UserMessageItem.vue'

export default {
	name: 'ChatBox',
	components: { UserMessageItem, SendInput },

	data() {
		return {
			messagesList: [],
		}
	},
	methods: {
		onSend(userMessage) {
			this.messagesList.push({
				id: new Date().getTime(),
				userMessage,
				likes: 0,
			})
		},
		onChangeLike({ id, num }) {
			const message = this.messagesList.find((message) => message.id === id)
			message.likes += num
		},
	},
}
</script>

<style lang="scss" scoped></style>
