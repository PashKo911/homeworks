<script setup>
import MySlotTest from './components/MySlotTest.vue'
</script>

<template>
  <my-slot-test title="Tea" :price="23">
    <button>Купити</button>
  </my-slot-test>
  <my-slot-test title="Tea" :price="23">
    <input type="text" name="" id="" />

    <template #footer="{ year }">
      <h2>На ринку - {{ 2025 - year }} років</h2>
    </template>
  </my-slot-test>

  <my-slot-test title="Milk" :price="53">
    <h1>Супер молоко</h1>
    <hr />
    <template #footer>
      <button>Купити</button>
    </template>
  </my-slot-test>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
