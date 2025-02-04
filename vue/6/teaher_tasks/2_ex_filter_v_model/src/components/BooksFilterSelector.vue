<template>
  <div>
    <label>
      Назва
      <input type="text" v-model.trim="titleValue" />
    </label>
  </div>
  <div>
    <label>
      Рік видання
      <input type="number" v-model.number="yearValue" />
    </label>
  </div>
  <div>
    <label>
      Автор
      <input type="text" v-model.trim="authorValue" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'BooksFilterSelector',
  props: {
    title: {
      type: String,
      default: '',
    },
    year: {
      type: Number,
      default: null,
    },
    author: {
      type: String,
      default: '',
    },
  },

  computed: {
    titleValue: {
      get() {
        return this.title
      },
      set(newVal) {
        this.$emit('update:title', newVal)
      },
    },
    yearValue: {
      get() {
        return this.year
      },
      set(newVal) {
        this.$emit('update:year', newVal)
      },
    },
    authorValue: {
      get() {
        return this.author
      },
      set(newVal) {
        this.$emit('update:author', newVal)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
