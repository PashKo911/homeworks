<template>
	<article class="article border-gray-400">
		<div class="img">
			<img :src="productData.imgSrc" :alt="productData.title" />
		</div>
		<h3 class="title">
			{{ productData.title }}
		</h3>
		<div class="text-red-500 text-[1.25rem] ml-auto w-max">
			{{ productData.price }} <span class="text-[1rem]">₴</span>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ProductCard',
	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.article {
	@apply border-b border-r  p-[15px];
}
.img {
	@apply aspect-3/2 mb-[1.875rem];
}
.img img {
	@apply w-full h-full object-contain;
}
.title {
	@apply truncate mb-[1.875rem];
}
.price {
}
</style>
