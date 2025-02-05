<template>
	<div class="list-container">
		<h1>Список задач</h1>
		<todo-item v-for="task in todoList" :key="task.id" :task="task" @done="doneTask" @delete="deleteTask" />
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TodoItem from './TodoItem.vue'
export default {
	name: 'TodoListComp',

	components: { TodoItem },
	props: {
		tasksList: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		...mapGetters(['todoList']),
	},
	methods: {
		...mapActions(['doneTask', 'deleteTask']),
	},
}
</script>

<style lang="css" scoped>
.list-container {
	width: 400px;
	border: 2px solid black;
	margin-top: 20px;
	padding: 10px;
}
</style>
