<template>
  <div>
    <h1>Список книг</h1>
    <h2 v-if="isEmpty">Список порожній</h2>
    <div v-else>
      <table>
        <tr>
          <th>Назва</th>
          <th>Рік</th>
          <th>Автор</th>
        </tr>
        <tr v-for="{ id, title, year, author } in booksList" :key="id">
          <td>{{ title }}</td>
          <td>{{ year }}</td>
          <td>{{ author }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksList',

  props: {
    booksList: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    isEmpty() {
      return this.booksList.length === 0
    },
  },
}
</script>

<style lang="css" scoped>
table {
  border: 2px solid black;
}
</style>
