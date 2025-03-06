<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <slot>
      <div>{{ price }} грн.</div>
    </slot>
    <slot name="footer" :year="yearEst">
      <div>My shop - {{ yearEst }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MySlotTest',
  props: {
    title: {
      type: String,
      default: 'Hello',
    },
    price: {
      type: Number,
      default: 0,
    },
    course: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      yearEst: 2000,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid green;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  display: inline-block;
}
</style>
