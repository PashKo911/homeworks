<template>
  <div>
    <h1>Деталі події</h1>
    <h2>Назва події : {{ getCurrentItem.title }}</h2>
    <h3>Учасники :</h3>
    <ol>
      <li v-for="student in getCurrentListByIdsList" :key="student.id">
        {{ student.name }}
      </li>
    </ol>
    <router-link :to="{ name: 'eventEdit', params: { id: getCurrentItem.id } }"
      >Редагувати</router-link
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EventDetail',

  computed: {
    ...mapGetters('events', ['getCurrentItem']),
    ...mapGetters('students', ['getCurrentListByIdsList']),

    currentItemId() {
      return this.$route.params.id
    },
  },

  methods: {
    ...mapActions('events', ['loadItemById']),
    ...mapActions('students', ['loadItemsByIdsList']),
  },

  created() {
    if (this.currentItemId) {
      this.loadItemById(this.currentItemId)
      this.loadItemsByIdsList(this.getCurrentItem.studentsIdsList)
    }
  },
}
</script>

<style lang="scss" scoped></style>
