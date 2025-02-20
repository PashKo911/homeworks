<template>
	<div class="container">
		<h2 class="title">Список товарів:</h2>
		<ul class="list">
			<li v-for="{ name, id } in categoriesList" :key="id" class="item">
				<router-link
					class="link"
					:to="{
						name: 'products',
						params: {
							categoryId: id,
						},
					}">
					{{ name }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { categories } from '@/constants/data.js'

export default {
	name: 'ShopView',
	methods: {
		...mapActions(['setCategoriesList']),
	},
	computed: {
		...mapGetters(['categoriesList']),
	},
	created() {
		this.setCategoriesList(categories)
	},
}
</script>

<style lang="scss" scoped>
.container {
}
.title {
	font-weight: 500;
	@include adaptiveValue('font-size', 24, 18);
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
.list {
	display: grid;
}
.item {
}
.link {
	position: relative;
	display: inline-block;
	padding: toRem(5) 0 toRem(5) toRem(20);
	transition: color 0.2s;

	&::before {
		content: '➤';
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(0, -50%);
		color: #58c6c2;
		opacity: 0;
		transition: opacity 0.2s;
	}

	@media (any-hover: hover) {
		&:hover {
			color: #58c6c2;
		}
		&:hover::before {
			opacity: 1;
		}
	}
}
</style>
