<template>
  <auth-layout>
    <div>
      <label for="">
        Login
        <input type="text" name="" id="" />
      </label>
    </div>
    <div>
      <label for="">
        Password
        <input type="password" name="" id="" />
      </label>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
export default {
  components: { AuthLayout },
  name: 'LoginPage',
}
</script>

<style lang="scss" scoped></style>
