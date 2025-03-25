<template>
  <div>
    <product-card
      v-for="product in getFilteredProducts"
      :key="product.id"
      :data="product"
      @delete="onDelete(product.id)"
      @edit="onEdit(product.id)"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

import { storeToRefs } from 'pinia'

import { useFiltersStore } from '../stores/filters'
const filtersStore = useFiltersStore()
const { getFilteredProducts } = storeToRefs(filtersStore)

import { useProductsStore } from '../stores/products'
const productsStore = useProductsStore()
const onDelete = (productId) => {
  productsStore.deleteItem(productId)
}

import { useRouter } from 'vue-router'
const router = useRouter()
const onEdit = (productId) => {
  router.push({
    name: 'productsEdit',
    params: {
      id: productId,
    },
  })
}
</script>

<style lang="scss" scoped></style>
