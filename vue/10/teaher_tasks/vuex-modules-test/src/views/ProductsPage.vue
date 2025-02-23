<template>
  <div class="container">
    <filter-section class="filter" />
    <div>
      {{ getFilteredProducts }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import FilterSection from '../components/filters/FilterSection.vue'

export default {
  name: 'ProductsPage',

  components: {
    FilterSection,
  },

  computed: {
    // ...mapGetters('products', ['productsList', 'getFilteredProducts']),
    ...mapGetters('sellers', ['sellersList']),
    ...mapGetters('filters', ['getFilteredProducts']),
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 20px;
  .filter {
    min-width: 170px;
  }
}
</style>
