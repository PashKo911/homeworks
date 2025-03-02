<template>
  <h1>Список подій</h1>
  <div v-for="eventItem in getItemsList" :key="eventItem.id">
    <router-link :to="getLinkData(eventItem.id)"
      >{{ getEventItemInfo(eventItem) }}
    </router-link>
  </div>
  <button @click="onAdd">Додати подію</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EventsList',

  computed: {
    ...mapGetters('events', ['getItemsList']),
  },

  methods: {
    ...mapActions('events', ['loadItemsList']),
    getLinkData(id) {
      return { name: 'eventDetail', params: { id } }
    },
    getEventItemInfo(eventItem) {
      return `${eventItem.title} - ${eventItem.studentsIdsList.length} учасників`
    },
    onAdd() {
      this.$router.push({
        name: 'eventEdit',
      })
    },
  },

  created() {
    this.loadItemsList()
  },
}
</script>

<style lang="scss" scoped></style>
