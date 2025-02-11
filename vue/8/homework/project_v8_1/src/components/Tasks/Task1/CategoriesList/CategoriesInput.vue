<template>
	<article class="article" :class="{ active: isCategoryActive }" @click="onSelect(categoryData.id)">
		<div class="image">
			<img class="img" :src="categoryData.imgSrc" :alt="categoryData.name" />
		</div>
		<span class="title">
			{{ categoryData.name }}
		</span>
	</article>
</template>

<script>
export default {
	name: 'CategoriesInput',
	props: {
		categoryData: {
			type: Object,
			required: true,
		},
		modelValue: {
			type: [String, Number],
			default: null,
		},
	},
	methods: {
		onSelect(id) {
			this.$emit('update:modelValue', id)
		},
	},
	computed: {
		isCategoryActive() {
			return this.modelValue === this.categoryData?.id
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.75rem 0.5rem;
	background-color: #fff;
	box-shadow: 0 0.125rem 0.625rem rgba(48, 48, 48, 0.05);
	border-radius: 0.25rem;
	color: #303030;
	font-size: 0.875rem;
	line-height: 1.125rem;
	text-align: center;
	letter-spacing: 0.0125rem;
	transition: all 0.2s ease;
	cursor: pointer;

	@media (any-hover: hover) {
		&:hover {
			color: #e31837;
			box-shadow: 0 0.25rem 0.5rem rgba(48, 48, 48, 0.2);
		}
	}

	&.active {
		color: #e31837;
		box-shadow: 0 0.25rem 0.5rem rgba(48, 48, 48, 0.2);
	}
}

.image {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 5.75rem;
	aspect-ratio: 1;
	margin-bottom: 0.25rem;
}

.img {
	max-width: 100%;
	max-height: 100%;
	height: auto;
}

.title {
	font-size: 1.125rem;
	font-weight: 500;
	max-width: 9.375rem;
}
</style>
