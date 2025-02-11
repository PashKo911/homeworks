<template>
  <div>
    <h1>Список працівників</h1>
    <ul>
      <li v-for="worker in workersList" :key="worker.id">
        <span>{{ worker.name }}:</span>
        <span>{{ worker.salary.toFixed(2) }} {{ currencyObj?.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WorkersList',
  props: {
    workersList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['currencyObj']),
  },
}
</script>

<style lang="scss" scoped></style>
