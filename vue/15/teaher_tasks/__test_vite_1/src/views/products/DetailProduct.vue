<template>
  <products-layout>
    {{ getCurrentItem }}
  </products-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import { mapGetters, mapActions } from 'vuex'
import ProductsLayout from '@/layouts/ProductsLayout.vue'
export default {
  components: { MainLayout, ProductsLayout },
  name: 'DetailProduct',
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },

  data() {
    return {
      itemData: {},
    }
  },

  computed: {
    ...mapGetters('products', ['getCurrentItem']),
  },

  methods: {
    ...mapActions('products', ['loadItemDataById']),
  },

  created() {
    this.loadItemDataById(this.id)
  },
}
</script>

<style lang="scss" scoped></style>
