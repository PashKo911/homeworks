<template>
  <div>
    <h1>ПІБ : {{ getCurrentItem.name }}</h1>
    <h2>Курс : {{ getCurrentItem.course }}</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'StudentDetail',

  computed: {
    ...mapGetters('students', ['getCurrentItem']),
    currentItemId() {
      return this.$route.params.id
    },
  },

  methods: {
    ...mapActions('students', ['loadItemById']),
  },

  created() {
    if (this.currentItemId) {
      this.loadItemById(this.currentItemId)
    }
  },
}
</script>

<style lang="scss" scoped></style>
