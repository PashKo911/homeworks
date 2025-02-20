<template>
    <h1>Дані про працівнимка</h1>
    <label>
        Ім"я:
        <input v-model="userData.name" type="text" />
    </label>
    <br />
    <label>
        Стаж:
        <input v-model="userData.experience" type="number" /> </label
    ><br />
    <label>
        Посада:
        <input v-model="userData.position" type="text" /> </label
    ><br />
    <button @click="onSave">{{ saveButtonTitle }}</button>
    <button @click="onCancel">Відміна</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EditUserPage',
    data() {
        return {
            userData: {
                name: null,
                experience: null,
                position: null,
            },
        }
    },
    computed: {
        ...mapGetters(['getUserById']),
        userId() {
            return this.$route.params.userId
        },
        saveButtonTitle() {
            return this.userId ? 'Зберегти' : 'Створити'
        },
    },

    created() {
        if (this.userId) this.userData = { ...this.getUserById(this.userId) }
    },

    methods: {
        ...mapActions(['updateUser', 'createUser']),
        onSave() {
            if (this.userId) this.updateUser(this.userData)
            else this.createUser(this.userData)

            this.$router.push({
                name: 'users',
            })
        },
        onCancel() {
            this.$router.push({
                name: 'users',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
