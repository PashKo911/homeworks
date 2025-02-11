<template>
  <div>
    <label>
      Шуканий працівник
      <input type="text" v-model="searchNameValue" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'NameFilterSimple',
  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },

  computed: {
    searchNameValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
