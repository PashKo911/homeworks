<template>
  <div>StudentsList</div>
  <div v-for="student in getItemsList" :key="student.id" class="container">
    <div>
      <router-link
        :to="{
          name: 'studentDetail',
          params: {
            id: student.id,
          },
        }"
        >{{ student.name }}</router-link
      >
    </div>
    <div>
      <button @click="onEdit(student.id)">Редагувати</button>
      <button @click="deleteItem(student.id)">Видалити</button>
    </div>
  </div>
  <router-link :to="{ name: 'studentEdit' }"
    >Додати нового студента</router-link
  >
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'StudentsList',

  computed: {
    ...mapGetters('students', ['getItemsList']),
  },

  methods: {
    ...mapActions('students', ['deleteItem', 'loadItemsList']),
    onEdit(id) {
      this.$router.push({
        name: 'studentEdit',
        params: {
          id,
        },
      })
    },
  },

  created() {
    this.loadItemsList()
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
