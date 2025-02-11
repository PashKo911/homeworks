<template>
  <div>
    <label>
      Шуканий працівник
      <input type="text" v-model="searchNameValue" />
    </label>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NameFilter',

  computed: {
    ...mapGetters(['searchName']),
    searchNameValue: {
      get() {
        return this.searchName
      },
      set(val) {
        this.changeName(val)
      },
    },
  },
  methods: {
    ...mapActions(['changeName']),
  },
}
</script>

<style lang="scss" scoped></style>
