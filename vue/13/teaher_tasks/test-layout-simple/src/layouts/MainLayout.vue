<template>
  <div class="header">
    <router-link to="/">Головна</router-link>
    <router-link to="/products">Товари</router-link>
    <router-link to="/about">Контакти</router-link>
  </div>
  <hr />
  <slot> </slot>
  <hr />
  <div class="footer">
    <slot name="footer">
      <div>Власник: Баба Галя</div>
      <div>Телефон: 12234324</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style lang="scss" scoped></style>
