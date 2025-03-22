<template>
  <div class="container">
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/about"> About </router-link>
      <router-link to="/contacts"> My Contacts </router-link>
    </nav>
    <div>
      <span v-if="getUser">
        <span>{{ getUser.displayName }}</span>
        <img :src="getUser.photoURL" />
        <button @click="onLogout">Logout</button>
      </span>
      <button v-else @click="onLogin">Login</button>
    </div>
  </div>
  <router-view />
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['getUser']),
  },

  methods: {
    ...mapActions('auth', ['loginWithGoogle', 'logout']),
    onLogout() {
      this.logout()
      this.$router.push({
        name: 'login',
      })
    },
    async onLogin() {
      try {
        await this.loginWithGoogle()
        this.$router.push({
          name: 'home',
        })
      } catch {
        alert('Щось пішло не так')
      }
    },
  },
}
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
