<template>
    <div>
        <h1>Second component</h1>
        <h2>Count: {{ count }}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SecondComp',
    computed: {
        ...mapGetters(['count']),
    },
}
</script>

<style lang="scss" scoped></style>
