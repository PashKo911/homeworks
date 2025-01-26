<template>
	<article class="article">
		<a class="img-link" target="_blank" :href="product.link">
			<img :src="product.imgPath" :alt="product.name" />
		</a>
		<div class="bottom">
			<h3>
				<a target="_blank" :href="product.link">{{ product.name }}</a>
			</h3>
			<a target="_blank" :href="commentsLink"> Залишити відгук </a>
			<span v-if="product.availability">Є в наявності</span>
			<span v-else>Немає в наявності</span>
			<h4>{{ product.price }}</h4>
		</div>
	</article>
</template>

<script>
const commentsLink = 'comments/'

export default {
	name: 'LastReviewedProduct',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	computed: {
		commentsLink() {
			return `${this.product.link}${commentsLink}`
		},
	},
}
</script>

<style lang="css" scoped>
.article {
	display: grid;
	align-content: start;
	gap: 1.875rem;
}
.img-link {
	display: block;
	position: relative;
	width: 100%;
	height: 25rem;
}
.img-link img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
}
.bottom {
	display: grid;
	gap: 0.3125rem;
}
</style>
