<template>
  <div class="task-container">
    <div>{{ task.title }} - {{ task.priority }}</div>
    <div>
      <button v-if="!isDone" @click="$emit('done', task.id)"> Done</button>
      <button @click="$emit('delete', task.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',

  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isDone() {
      return this.task.isDone
    },
  },
}
</script>

<style lang="css" scoped>
.task-container {
  width: 300px;
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  margin: 10px;
  padding: 5px;
}
</style>
