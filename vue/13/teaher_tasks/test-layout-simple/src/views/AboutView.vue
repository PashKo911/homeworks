<template>
  <main-layout>
    <h1>This is an about page</h1>

    <template #footer>
      <div>Address: Super region</div>
    </template>
  </main-layout>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
