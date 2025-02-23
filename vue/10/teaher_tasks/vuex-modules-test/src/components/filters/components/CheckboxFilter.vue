<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-for="item in itemsList" :key="item.value">
      <label>
        <input type="checkbox" :value="item.value" v-model="selectedValue" />
        {{ item.title }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxFilter',
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
      type: Array,
      default: () => [],
    },
  },
  computed: {
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
