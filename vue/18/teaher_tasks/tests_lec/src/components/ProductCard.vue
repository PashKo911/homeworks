<template>
  <div>
    <div>Назва: {{ data.title }}</div>
    <div>Ціна: {{ data.price }}</div>

    <button @click="$emit('buy', price)">Buy</button>
    <button @click="$emit('edit')">Edit</button>
    <button @click="$emit('delete')">Delete</button>
    <hr />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['buy', 'delete', 'edit'])
</script>

<style lang="scss" scoped></style>
