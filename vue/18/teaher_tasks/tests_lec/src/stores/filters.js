import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useProductsStore } from './products'

export const useFiltersStore = defineStore('filters', () => {
  const productsStore = useProductsStore()
  const title = ref(null)
  const minPrice = ref()
  const maxPrice = ref(null)

  const lowercaseTitle = computed(() =>
    title.value ? title.value.toLowerCase() : null
  )

  const getFilteredProducts = computed(() => {
    console.log('productsStore.products')
    console.log(productsStore.products)

    return productsStore.products.filter(
      (pr) =>
        (!title.value ||
          pr.title.toLowerCase().includes(lowercaseTitle.value)) &&
        (!minPrice.value || pr.price >= minPrice.value) &&
        (!maxPrice.value || pr.price <= maxPrice.value)
    )
  })

  return {
    title,
    minPrice,
    maxPrice,
    getFilteredProducts,
  }
})
