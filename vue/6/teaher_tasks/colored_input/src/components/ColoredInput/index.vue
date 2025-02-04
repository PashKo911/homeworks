<template>
  <div>
    <label>
      {{ labelText }}
    </label>
    <input type="number" :class="currentLevelClass" v-model.number="inpValue" />
  </div>
</template>

<script>
export default {
  name: 'ColoredInput',
  props: {
    labelText: {
      type: String,
      default: 'New Value',
    },
    levelStatusValues: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    inpValue: {
      get() {
        return this.modelValue
      },
      set(newVal) {
        this.$emit('update:modelValue', newVal)
      },
    },
    currentLevelClass() {
      let currentClass
      if (this.inpValue >= this.levelStatusValues.ok) currentClass = 'ok'
      else if (this.inpValue >= this.levelStatusValues.warn)
        currentClass = 'warn'
      else currentClass = 'danger'
      return currentClass
    },
  },
}
</script>

<style lang="scss" scoped>
.danger {
  background-color: red;
}
.warn {
  background-color: orange;
}
.ok {
  background-color: green;
}
</style>
