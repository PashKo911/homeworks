<template>
	<div class="box">
		<a class="link" target="_blank" :href="product.productLink">
			<img :src="product.imageLink" :alt="product.description" />
			<div class="middle">
				<h2 class="title">{{ product.storeName }}</h2>
				<h3 :class="isAvailable.class">{{ isAvailable.text }}</h3>
			</div>
			<div class="description">
				{{ product.description }}
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'ProductItem',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	computed: {
		isAvailable() {
			let res
			if (this.product.availability) {
				res = {
					text: 'Є в наявності',
					class: 'green',
				}
			} else {
				res = {
					text: 'Немає в наявності',
					class: 'red',
				}
			}
			return res
		},
	},
}
</script>

<style lang="css" scoped>
.box {
}
.link {
	display: grid;
	gap: 0.625rem;
	align-content: start;
	text-decoration: none;
	color: inherit;
	border: 0.0625rem solid transparent;
	padding: 0.9375rem;
	border-radius: 1.25rem;
	transition: border-color 0.2s;
}
@media (any-hover: hover) {
	.link:hover {
		border-color: gray;
	}
}
img {
	width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;
	border-radius: 1.25rem;
}
.title {
	font-weight: bold;
	margin-bottom: 0;
	font-size: clamp(1.125rem, 0.986rem + 0.7vw, 1.625rem);
}
.middle {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 1.25rem;
	row-gap: 0.3125rem;
	font-size: 1.125rem;
}
.green {
	color: green;
}
.red {
	color: red;
}
.description {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	/* word-break: break-all; */
}
</style>
