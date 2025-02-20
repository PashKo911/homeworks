<template>
    <div v-for="user in getUsersList" :key="user.id">
        <router-link
            :to="{
                name: 'user',
                params: {
                    userId: user.id,
                },
            }"
            >{{ user.name }}</router-link
        >
        <button @click="onUserEdit(user.id)">Edit</button>
        <button @click="deleteUser(user.id)">Delete</button>
    </div>
    <div>
        <button @click="onAddUser">Додати нового працівника</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'UsersList',
    computed: {
        ...mapGetters(['getUsersList']),
    },

    created() {
        this.loadUsersData()
    },

    methods: {
        ...mapActions(['loadUsersData', 'deleteUser']),
        onUserEdit(userId) {
            this.$router.push({
                name: 'edit',
                params: {
                    userId,
                },
            })
        },
        onAddUser() {
            this.$router.push({
                name: 'edit',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.link-item {
    display: block;
}
</style>
