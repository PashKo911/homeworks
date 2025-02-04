<template>
  <books-filter-selector
    v-model:title="bookTitle"
    v-model:year="bookYear"
    v-model:author="bookAuthor"
  />

  <books-list :books-list="filteredBooksList" />

  <books-filter-selector-obj v-model="data2" />
  <div>{{ data2 }}</div>
</template>

<script>
import BooksList from './components/BooksList.vue'
import BooksFilterSelector from './components/BooksFilterSelector.vue'
import BooksFilterSelectorObj from './components/BooksFilterSelectorObj.vue'

import { books } from './constants/data'
export default {
  name: 'App',

  components: { BooksList, BooksFilterSelector, BooksFilterSelectorObj },

  data() {
    return {
      books,
      bookTitle: null,
      bookYear: null,
      bookAuthor: null,
      data2: null,
    }
  },

  computed: {
    filteredBooksList() {
      if (this.bookTitle || this.bookYear || this.bookAuthor) {
        return books.filter((book) => this.isBookAcceptedPartly(book))
      }
      return books
    },
  },

  methods: {
    isBookPropertyAccepted(book, propTitle, filterValue) {
      return (
        !filterValue ||
        book[propTitle].toLowerCase().includes(filterValue.toLowerCase())
      )
    },
    isBookAcceptedPartly(book) {
      return (
        this.isBookPropertyAccepted(book, 'title', this.bookTitle) &&
        (!this.bookYear || this.bookYear === book.year) &&
        this.isBookPropertyAccepted(book, 'author', this.bookAuthor)
      )
    },
    isBookAcceptedTotally(book) {
      return (
        (!this.bookTitle || book.title === this.bookTitle) &&
        (!this.bookYear || this.bookYear === book.year) &&
        (!this.bookAuthor || this.bookAuthor === book.bookAuthor)
      )
    },
  },
}
</script>

<style></style>
