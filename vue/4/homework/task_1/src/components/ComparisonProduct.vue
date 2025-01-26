<template>
	<article>
		<a target="_blank" :href="link">
			<img alt="image" :src="imgPath" />
		</a>
	</article>
</template>

<script>
export default {
	name: 'ComparisonProduct',
	props: {
		imgPath: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="css" scoped>
img {
	width: 100%;
	object-fit: cover;
}
</style>
