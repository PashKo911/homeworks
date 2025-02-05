<template>
    <h1>Hello {{ userName }}</h1>
    <div>
        <button @click="changeCounter(-1)">-</button>
        {{ count }}
        <button @click="changeCounter(1)">+</button>
    </div>
    <div>
        {{ decimalCountVal }}
    </div>
    <h2>Count divided by 2</h2>
    <h3>{{ anyDivVal(2) }}</h3>
    <h2>Count divided by 50</h2>
    <h3>{{ anyDivVal(50) }}</h3>
    <div>
        <input type="number" v-model="divNum" />
        <hr />
        <h2>Count divided by {{ divNum }}</h2>
        <h3>{{ anyDivVal(divNum) }}</h3>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'MyComp',
    data() {
        return {
            divNum: 1,
        }
    },

    computed: {
        ...mapState(['userName']),
        ...mapGetters(['count', 'decimalCountVal', 'anyDivVal']),
    },
    methods: {
        ...mapActions(['changeCounter']),
    },
}
</script>

<style lang="scss" scoped></style>
