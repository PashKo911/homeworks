<template>
	<h1>
		Задача 2. Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки .
	</h1>
	<chat-box />
</template>

<script>
import ChatBox from './components/ChatBox.vue'
export default {
	name: 'App',
	components: { ChatBox },
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
h1 {
	margin-bottom: 2.5rem;
}
</style>
