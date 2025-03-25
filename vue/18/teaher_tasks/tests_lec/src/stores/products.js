import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBaseItems } from './baseItems'

export const useProductsStore = defineStore('products', () => {
  return {
    ...useBaseItems('products'),
  }
})
