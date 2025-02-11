<template>
	<article class="article">
		<div class="image">
			<img class="img" :src="productData.imgSrc" :alt="productData.title" />
		</div>
		<h3 class="title">
			{{ productData.title }}
		</h3>
		<div class="bottom">
			<div class="left">
				<div class="discount">{{ formatPrice(productData.oldPrice) }} ₴</div>
				<div class="price">{{ formatPrice(productData.price) }} ₴</div>
			</div>
			<button class="cart">
				<cart />
			</button>
		</div>
	</article>
</template>

<script>
import Cart from '@/components/icons/Cart.vue'
import { formatPrice } from '@/utils/formatPrice.js'

export default {
	name: 'ProductCard',
	components: {
		Cart,
	},
	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
	methods: {
		formatPrice,
	},
}
</script>

<style lang="scss" scoped>
.article {
	display: flex;
	flex-direction: column;
	box-shadow: 0 0.125rem 0.3125rem rgba(48, 48, 48, 0.05);
	border-radius: 0.125rem;
	background-color: #fff;
	margin-right: 0.25rem;
	margin-bottom: 0.1875rem;
	position: relative;
	padding: 1.6875rem 1rem 1.3125rem 0.9375rem;
}
.image {
	height: 11.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}

.img {
	max-width: 13.25rem;
	aspect-ratio: auto 212 / 212;
}
.title {
	font-size: 1.375rem;
	font-weight: 500;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	overflow: hidden;
	-webkit-box-orient: vertical;
	flex-grow: 1;
	@include adaptiveValue('font-size', 26, 22);

	&:not(:last-child) {
		margin-bottom: toRem(15);
	}
}
.discount {
	font-size: 1.125rem;
	text-decoration: line-through;
	color: var(--color-gray-500);
}
.price {
	font-size: 1.625rem;
	font-weight: 500;
	color: var(--color-red-500);
}
.bottom {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 0.9375rem;
}
.left {
}
.cart {
	background-color: var(--color-red-500);
	font-size: 0;
	padding: 0.625rem 1.25rem;
	border: none;
	transition: background-color 0.3s;
	letter-spacing: 0.24px;
	font-weight: 600;
	line-height: normal;
	border-radius: 4px;
	position: relative;
}
</style>
