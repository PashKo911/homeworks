<template>
	<article class="article">
		<a :href="productData.link" target="_blank" class="image">
			<img :src="productData.imgSrc" :alt="productData.title" class="img" />
		</a>
		<div class="content">
			<a :href="productData.link" target="_blank" class="title">
				{{ productData.title }}
			</a>
			<slot>
				<div class="icons">
					<img :src="icon" v-for="(icon, index) in productData.icons" :key="index" />
				</div>
			</slot>
			<base-button>Купити</base-button>
		</div>
	</article>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'
export default {
	components: { BaseButton },
	name: 'ProductCard',
	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	display: grid;
	gap: toRem(10);
	border-radius: toRem(10);
	overflow: hidden;
	padding-bottom: toRem(15);
	box-shadow: 0 0 toRem(9) rgb(0, 0, 0, 0.15);

	@media (any-hover: hover) {
		&:hover .img {
			transform: scale(1.05);
		}
		&:hover .title {
			text-decoration: underline;
		}
	}
}
.content {
	padding: 0 toRem(15);
	display: grid;
	gap: toRem(10);
}
.image {
	width: 100%;
	height: toRem(300);
	overflow: hidden;
}
.img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	will-change: transform;
	cursor: pointer;
	transition: transform 0.3s;
}

.title {
	font-weight: 600;
	@include adaptiveValue('font-size', 22, 18);
}

.icons {
	display: flex;
	gap: toRem(10);
	align-items: center;
	img {
		width: toRem(40);
		object-fit: contain;
	}
}
</style>
