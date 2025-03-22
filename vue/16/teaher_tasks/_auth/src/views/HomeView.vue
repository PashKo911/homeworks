<template>
  <div class="home">
    <div v-if="isLoading">Loading ....</div>
    <div v-else-if="hasError">Error</div>
    <template v-else>
      <div v-for="item in getItemsList" :key="item.id">
        {{ item.title }} - {{ item.price }}
        <button v-if="userPermissions.delete" @click="deleteItem(item.id)">
          Delete
        </button>
        <button v-if="userPermissions.update" @click="onEdit(item)">
          Edit
        </button>
      </div>
    </template>
    <hr />
    <div v-if="userPermissions.write">
      <div>
        <label>Title </label>
        <input v-model="task.title" type="text" />
      </div>
      <div>
        <label>Price </label>
        <input v-model="task.price" type="number" />
      </div>
      <button @click="onTaskAction">{{ buttonTitle }}</button>
    </div>
    <hr />
    <h3>Filters</h3>
    <div>
      <label>Price </label>
      <input v-model="searchPrice" type="number" />
    </div>
    <button
      @click="
        loadFilteredData({
          fieldTitle: 'price',
          compareOperator: '==',
          valueToCompare: searchPrice,
        })
      "
    >
      Search
    </button>
    <button @click="onClearFilter">Clear filter</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',

  data() {
    return {
      task: {},
      taskCopy: null,
      searchPrice: null,
    }
  },

  computed: {
    ...mapGetters('todoItems', ['getItemsList', 'isLoading', 'hasError']),
    ...mapGetters('users', ['userPermissions']),
    ...mapGetters('auth', ['getUser']),
    isEditing() {
      return this.task.id
    },
    buttonTitle() {
      return this.isEditing ? 'Save' : 'Add task'
    },
  },

  created() {
    this.loadList()
  },

  methods: {
    ...mapActions('todoItems', [
      'loadList',
      'addItem',
      'deleteItem',
      'updateItem',
      'loadFilteredData',
    ]),
    onClearFilter() {
      this.loadList()
      this.searchPrice = null
    },
    onTaskAction() {
      if (this.isEditing) {
        const data = {}

        if (this.task.title !== this.taskCopy.title)
          data.title = this.task.title
        if (this.task.price !== this.taskCopy.price)
          data.price = this.task.price

        this.updateItem({
          itemId: this.task.id,
          data,
        })
      } else this.addItem(this.task)
      this.task = {}
    },
    onEdit(item) {
      this.task = { ...item }
      this.taskCopy = item
    },
  },
}
</script>
