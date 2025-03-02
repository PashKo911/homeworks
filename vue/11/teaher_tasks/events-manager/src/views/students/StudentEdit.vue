<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <div>
      <label>
        ПІБ студента
        <input
          v-model="itemData.name"
          type="text"
          placeholder="Ввдіть ПІБ студента"
        />
      </label>
    </div>
    <div>
      <label>
        Курс студента
        <input
          v-model="itemData.course"
          type="number"
          placeholder="Ввдіть ПІБ студента"
        />
      </label>
    </div>
  </div>
  <button @click="onSave">{{ buttonTitle }}</button>
  <button @click="onCancel">Відмінити</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import commonEditMixins from '../../components/mixins/commonEditMixins'
export default {
  name: 'StudentEdit',
  mixins: [commonEditMixins],
  data() {
    return {
      itemData: {},
    }
  },

  computed: {
    ...mapGetters('students', ['getCurrentItem']),
  },

  methods: {
    ...mapActions('students', ['addNewItem', 'updateItem', 'loadItemById']),
    onCancel() {
      this.$router.push({ name: 'studentsList' })
    },
    onSave() {
      if (this.currentItemId) this.updateItem(this.itemData)
      else this.addNewItem(this.itemData)

      this.$router.push({ name: 'studentsList' })
    },
  },

  created() {
    if (this.currentItemId) {
      this.loadItemById(this.currentItemId)
      this.itemData = this.getCurrentItem
    }
  },
}
</script>

<style lang="scss" scoped></style>
