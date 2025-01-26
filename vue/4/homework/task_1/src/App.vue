<template>
	<div class="container">
		<h1>HW-4</h1>
		<h2 class="title">Задача 1. Спробуйте відтворити використовуючи відповідні компоененти</h2>
		<comparison-list />
		<last-reviewed-list />
	</div>
</template>

<script>
import ComparisonList from './components/ComparisonList.vue'
import LastReviewedList from './components/LastReviewedList.vue'

export default {
	name: 'App',
	components: { ComparisonList, LastReviewedList },
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
.container {
	max-width: 81.25rem;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 6.25rem;
	display: flex;
	flex-direction: column;

	gap: 2.5rem;
}
h1 {
	text-align: center;
}
.title:not(:last-child) {
	margin-bottom: 6.25rem;
	text-align: center;
}
</style>
