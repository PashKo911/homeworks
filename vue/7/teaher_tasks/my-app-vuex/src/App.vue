<template>
    <my-comp />
    <hr />
    <second-comp />
</template>

<script>
import MyComp from './components/MyComp.vue'
import SecondComp from './components/SecondComp.vue'

export default {
    name: 'App',
    components: {
        MyComp,
        SecondComp,
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
