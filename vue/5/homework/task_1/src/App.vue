<template>
	<div class="container">
		<h1 class="title">Вивести перелік товарів</h1>
		<products-list :productsData="productsData" />
	</div>
</template>

<script>
import { productsData } from './constants/data'
import ProductsList from './components/ProductsList'
export default {
	name: 'App',
	components: {
		ProductsList,
	},
	data() {
		return {
			productsData,
		}
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	padding-top: 3.75rem;
}
.title {
	margin-bottom: 3.75rem;
	font-size: clamp(1.5rem, 1.187rem + 1.57vw, 2.625rem);
	font-weight: bold;
	text-align: center;
}
.container {
	max-width: 91.875rem;
	margin-left: auto;
	margin-right: auto;
	padding: 0 0.9375rem;
}
* {
	padding: 0px;
	margin: 0px;
	border: 0px;
}
*,
*::before,
*::after {
	box-sizing: border-box;
}
*::before,
*::after {
	display: inline-block;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
</style>
