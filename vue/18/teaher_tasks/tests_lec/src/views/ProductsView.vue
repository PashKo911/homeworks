<template>
  <div>
    <products-list />
  </div>
  <hr />
  <router-link :to="{ name: 'productsEdit' }">Додати товар</router-link>
</template>

<script setup>
import ProductsList from '../components/ProductsList.vue'
</script>

<style lang="scss" scoped></style>
