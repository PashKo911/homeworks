<template>
  <div>
    <label>
      Назва
      <input type="text" v-model.trim="filterData.titleValue" />
    </label>
  </div>
  <div>
    <label>
      Рік видання
      <input type="number" v-model.number="filterData.yearValue" />
    </label>
  </div>
  <div>
    <label>
      Автор
      <input type="text" v-model.trim="filterData.authorValue" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'BooksFilterSelectorObj',
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        titleValue: '',
        yearValue: 0,
        authorValue: '',
      }),
    },
  },
  data() {
    return {
      filterData: {
        ...this.modelValue,
      },
    }
  },
  watch: {
    modelValue(newVal) {
      for (const key in this.modelValue) {
        this.filterData[key] = newVal[key]
      }
    },
    filterData: {
      handler(newVal) {
        this.$emit('update:modelValue', { ...newVal })
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
