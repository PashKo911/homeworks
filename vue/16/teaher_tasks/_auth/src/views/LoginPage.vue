<template>
    <div>
        <h1>Увійдіть для користування сервісами</h1>
        <button @click="onLogin">Увійти</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginPage',

    methods: {
        ...mapActions('auth', ['loginWithGoogle']),
        async onLogin() {
            try {
                await this.loginWithGoogle()
                this.$router.push({
                    name: 'home',
                })
            } catch (error) {
                alert(error.message)
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
