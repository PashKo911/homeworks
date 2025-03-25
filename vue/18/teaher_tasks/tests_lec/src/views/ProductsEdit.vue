<template>
  <div>
    <label>
      Назва товару
      <input type="text" v-model="data.title" />
    </label>
  </div>
  <div>
    <label>
      Ціна товару
      <input type="text" v-model="data.price" />
    </label>
  </div>
  <button @click="onSave">{{ btnTitle }}</button>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// const router = useRouter()
const route = useRoute()
const router = useRouter()

const prodId = computed(() => route.params.id)

const data = reactive({
  title: null,
  price: 0,
})
// --- з використанням ref
// const data = ref({
//   title: null,
//   price: 0,
// })

import { useProductsStore } from '../stores/products'
const productsStore = useProductsStore()
onMounted(() => {
  if (prodId.value) {
    const prodItem = productsStore.getItemById(prodId.value)
    // --- з використанням reactive
    Object.assign(data, prodItem)
    // --- з використанням ref
    // data.value = { ...prodItem }
  }
})

const btnTitle = computed(() => (prodId.value ? 'Зберегти' : 'Додати'))
const onSave = () => {
  // --- з використанням reactive
  if (prodId.value) productsStore.updateItem(data)
  else productsStore.addItem(data)
  // --- з використанням ref
  // if (prodId.value) productsStore.updateItem(data.value)
  // else productsStore.addItem(data.value)
  router.push({
    name: 'products',
  })
}
</script>

<style lang="scss" scoped></style>
