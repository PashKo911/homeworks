<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <div>
      <label>
        Назва події
        <input
          v-model="itemData.title"
          type="text"
          placeholder="Ввдіть назву події"
        />
      </label>
    </div>
    <h2>Учасники</h2>
    <div v-for="student in getItemsList" :key="student.id">
      <label>
        <input
          type="checkbox"
          :value="student.id"
          v-model="itemData.studentsIdsList"
        />
        {{ student.name }}
      </label>
    </div>
  </div>
  <button @click="onSave">{{ buttonTitle }}</button>
  <button @click="onCancel">Відмінити</button>
</template>

<script>
import commonEditMixins from '../../components/mixins/commonEditMixins'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EventEdit',
  mixins: [commonEditMixins],
  data() {
    return {
      itemData: {
        title: null,
        studentsIdsList: [],
      },
    }
  },
  computed: {
    ...mapGetters('events', ['getCurrentItem']),
    ...mapGetters('students', ['getItemsList']),
  },

  methods: {
    ...mapActions('events', ['addNewItem', 'updateItem', 'loadItemById']),
    ...mapActions('students', ['loadItemsList']),
    onCancel() {
      this.$router.push({ name: 'eventsList' })
    },
    onSave() {
      if (this.currentItemId) this.updateItem(this.itemData)
      else this.addNewItem(this.itemData)

      this.$router.push({ name: 'eventsList' })
    },
  },

  created() {
    if (this.currentItemId) {
      this.loadItemById(this.currentItemId)
      this.itemData = this.getCurrentItem
    }
    this.loadItemsList()
  },
}
</script>

<style lang="scss" scoped></style>
