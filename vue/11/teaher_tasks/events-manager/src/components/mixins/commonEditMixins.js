export default {
  computed: {
    currentItemId() {
      return this.$route.params.id
    },
    pageTitle() {
      return this.currentItemId
        ? 'Редагування елемента'
        : 'Додавання нового елемента'
    },
    buttonTitle() {
      return this.currentItemId ? 'Зберегти зміни' : 'Додати нового студента'
    },
  },
}
