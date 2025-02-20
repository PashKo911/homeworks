<template>
  <div>My address !</div>
  <div>
    <button @click="onCarCalc(20)">20</button>
    <button @click="onCarCalc(50)">50</button>
    <button @click="onCarCalc(100)">100</button>
  </div>
</template>

<script>
export default {
  name: 'MyContacts',

  methods: {
    onCarCalc(litersNum) {
      this.$router.push({
        name: 'car',
        params: {
          liters: litersNum,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
