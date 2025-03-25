<template>
  <div class="about">
    <h1>This is an about page. Hello</h1>
    <router-link to="/">На головну</router-link>
    <button @click="onClick">На головну</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const onClick = () => {
  router.push({
    name: 'home',
  })
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
