<template>
  <div>Мій домашній улюбленець: Toyota!</div>
  <div>Кількість літрів: {{ currentLitersNumber }}</div>
  <div>Кількість кілометрів: {{ kilometersNumber }}</div>
</template>

<script>
export default {
  name: 'MyCar',
  computed: {
    currentLitersNumber() {
      return this.$route.params.liters
    },
    kilometersNumber() {
      return (this.currentLitersNumber * 100) / 4.7
    },
  },
}
</script>

<style lang="scss" scoped></style>
