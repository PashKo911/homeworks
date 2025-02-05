<template>
  <todo-form />
  <todo-list />
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
export default {
  name: 'TodoManager',

  components: { TodoForm, TodoList },

  data() {
    return {}
  },
}
</script>
TodoForm

<style lang="scss" scoped></style>
