<template>
	<article class="article">
		<div class="img">
			<img :src="product.imgSrc" :alt="product.title" />
		</div>
		<div class="right">
			<h3 class="title">
				{{ product.title }}
			</h3>
			<div class="discount">
				Ваша економія: <span>{{ product.discount }} ₴</span>
			</div>
			<div class="old-price">
				<h4>{{ product.oldPrice }}</h4>
				<span>₴</span>
			</div>
			<h4 class="price">{{ product.price }}<span>₴</span></h4>
			<div class="button-wrapper">
				<button-green title="Купити" @submit="onBuy(product.id)" />
			</div>
		</div>
	</article>
</template>

<script>
import ButtonGreen from '../ui/ButtonGreen.vue'
export default {
	components: { ButtonGreen },
	name: 'ProductItem',
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	methods: {
		onBuy(productId) {
			this.$emit('submit', productId)
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	display: flex;
	gap: 1.875rem;
	padding-top: clamp(0.938rem, 0.503rem + 2.17vw, 2.5rem);
	padding-bottom: clamp(0.938rem, 0.503rem + 2.17vw, 2.5rem);
	justify-content: space-between;

	&:not(:last-child) {
		border-bottom: 0.0625rem solid gray;
	}

	@media (max-width: 35.9363rem) {
		flex-direction: column;
	}
}
.img {
	display: block;
	max-width: 15.625rem;
	flex-shrink: 0;

	img {
		width: 100%;
		object-fit: cover;
	}
}
.right {
	flex-grow: 1;
}
.title {
	color: rgb(0, 149, 255);
	font-size: clamp(1.25rem, 1.076rem + 0.87vw, 1.875rem);
	width: 100%;
	box-sizing: border-box;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
	max-width: 45.625rem;
	&:not(:last-child) {
		margin-bottom: 0.625rem;
	}
}
.discount {
	font-size: 1rem;
	font-weight: 600;

	&:not(:last-child) {
		margin-bottom: 0.9375rem;
	}

	span {
		color: red;
		font-size: 1.125rem;
	}
}
.old-price {
	color: rgb(164, 161, 161);
	display: flex;
	align-items: flex-end;
	gap: 0.1875rem;
	font-size: clamp(1.25rem, 1.076rem + 0.87vw, 1.875rem);

	h4 {
		text-decoration: line-through;
	}
	span {
		font-size: 1.125rem;
		position: relative;
		bottom: 0.25em;
	}
}
.price {
	color: red;
	display: flex;
	align-items: flex-end;
	gap: 3;
	font-size: clamp(1.625rem, 1.382rem + 1.22vw, 2.5rem);
	margin-bottom: 0.625rem;

	span {
		position: relative;
		bottom: 0.3em;
		font-size: clamp(1.125rem, 1.055rem + 0.35vw, 1.375rem);
	}
}
.button-wrapper {
	justify-self: flex-end;

	@media (min-width: 35.9363rem) {
		position: relative;
		top: -10%;
	}
}
</style>
