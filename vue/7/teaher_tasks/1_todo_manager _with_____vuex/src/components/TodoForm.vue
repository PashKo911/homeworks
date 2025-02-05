<template>
	<div class="add-form">
		<h1>Додати задачу</h1>
		<div>
			<label>
				Задача
				<input type="text" v-model="title" />
			</label>
		</div>
		<div>
			<label>
				Пріоритет
				<input type="number" v-model="priority" />
			</label>
		</div>
		<button @click="onAddTask">Додати задачу</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'TodoList',
	data() {
		return {
			title: null,
			priority: null,
		}
	},

	methods: {
		...mapActions(['addTask']),
		onAddTask() {
			this.addTask({
				title: this.title,
				priority: this.priority,
			})
			this.title = null
			this.priority = null
		},
	},
}
</script>

<style lang="css" scoped>
.add-form {
	width: 400px;
	border: 2px solid black;
	padding: 10px;
}
</style>
