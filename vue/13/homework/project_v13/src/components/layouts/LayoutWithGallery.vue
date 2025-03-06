<template>
	<header class="header">
		<div class="container">
			<router-link :to="{ name: 'home' }" class="link"> На головну </router-link>
		</div>
	</header>
	<main>
		<slot />

		<section class="gallery">
			<div class="container">
				<h2 class="title">Галерея</h2>
				<div class="gallery-list">
					<div v-for="i in galleryList" :key="i.id" class="item">
						<img class="img" :src="i.imgSrc" alt="image" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'LayoutWithGallery',
	computed: {
		...mapGetters(['galleryList']),
	},
}
</script>

<style lang="scss" scoped>
.header {
	background-color: var(--main-color);

	.container {
		padding-top: toRem(15);
		padding-bottom: toRem(15);
	}
}

.link {
	color: #fff;
	font-size: 1.375rem;
	font-weight: 500;
	transition: color 0.3s;

	@media (any-hover: hover) {
		&:hover {
			color: var(--light-text-hover);
		}
	}
}
.gallery {
}
h2.title {
	&:not(:last-child) {
		margin-bottom: toRem(30);
	}
}
.gallery-list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(toRem(240), 1fr));
	gap: toRem(30);
}

.item {
}
.img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
