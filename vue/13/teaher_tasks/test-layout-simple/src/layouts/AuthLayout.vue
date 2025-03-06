<template>
  <div class="header">
    <router-link to="/">Повернутись на головну</router-link>
  </div>
  <hr />
  <slot> </slot>
  <hr />
  <div class="footer">
    <div>Акції</div>
    <ol>
      <li>Перший місяць безкоштовно</li>
      <li>Безкоштовна підтримка</li>
    </ol>
  </div>
  <hr />
  <div>
    <button>Придбати підписку</button>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>

<style lang="scss" scoped></style>
