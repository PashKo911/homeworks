<template>
    <h1>Дані про працівнимка</h1>
    <h2>Ім"я: {{ currentUser.name }}</h2>
    <h2>Стаж: {{ currentUser.experience }}</h2>
    <h2>Посада: {{ currentUser.position }}</h2>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'UserPage',
    computed: {
        ...mapGetters(['getUserById']),
        userId() {
            return this.$route.params.userId
        },
        currentUser() {
            console.log(this.userId)
            return this.getUserById(this.userId)
        },
    },
}
</script>

<style lang="scss" scoped></style>
