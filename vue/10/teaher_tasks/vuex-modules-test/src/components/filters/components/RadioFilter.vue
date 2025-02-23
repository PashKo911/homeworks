<template>
  <div>
    <h3>{{ title }}</h3>

    <div v-for="item in itemsListWithDefaultOption" :key="item.value">
      <label>
        <input type="radio" :value="item.value" v-model="selectedValue" />
        {{ item.title }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioFilter',
  props: {
    title: {
      type: String,
      required: true,
    },
    itemsList: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    itemsListWithDefaultOption() {
      return [
        {
          title: 'Всі продавці',
          value: null,
        },
        ...this.itemsList,
      ]
    },
    selectedValue: {
      get() {
        return this.modelValue
      },
      set(newVal) {
        this.$emit('update:modelValue', newVal)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
