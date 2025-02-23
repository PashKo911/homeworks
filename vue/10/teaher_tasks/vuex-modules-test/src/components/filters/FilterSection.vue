<template>
  <div>
    <radio-filter
      title="Продавці"
      :items-list="sellersObjList"
      v-model="filterValue.seller"
    />
    <checkbox-filter
      title="Бренди"
      :items-list="brandsObjList"
      v-model="filterValue.brands"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CheckboxFilter from './components/CheckboxFilter.vue'
import RadioFilter from './components/RadioFilter.vue'
export default {
  name: 'FilterSection',
  components: {
    CheckboxFilter,
    RadioFilter,
  },

  computed: {
    ...mapGetters('filters', ['filter', 'brandsObjList', 'sellersObjList']),
    filterValue: {
      get() {
        return this.filter
      },
      set(val) {
        this.setFilter(val)
      },
    },
  },

  methods: {
    ...mapActions('filters', ['setFilter']),
  },
}
</script>

<style lang="scss" scoped></style>
