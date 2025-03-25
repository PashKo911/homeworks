import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBaseItems } from './baseItems'

export const useCompaniesStore = defineStore('companies', () => {
  return {
    ...useBaseItems('companies'),
  }
})
