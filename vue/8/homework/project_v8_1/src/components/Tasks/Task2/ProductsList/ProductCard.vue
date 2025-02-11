<template>
	<article class="article">
		<div class="image">
			<img class="img" :src="product.imgSrc" :alt="product.brand" />
		</div>
		<div class="content">
			<h3 class="title">{{ fullTitle }}</h3>
			<div class="price">
				<h3 class="usd">{{ formatPrice(product.price) }} $</h3>
				•
				<h3 class="uan">{{ formatPrice(convertedPrice) }} грн.</h3>
			</div>
			<ul class="characteristics">
				<li class="characteristics__item">
					<speedometer-icon />
					{{ product.mileage }}
				</li>
				<li class="characteristics__item">
					<location-icon />
					{{ product.location }}
				</li>
				<li class="characteristics__item">
					<gas-icon />
					{{ product.fuel }}
				</li>
				<li class="characteristics__item">
					<transmission-icon />
					{{ product.transmission }}
				</li>
			</ul>
			<div class="vin">
				{{ product.vin }}
			</div>
		</div>
	</article>
</template>

<script>
import SpeedometerIcon from '@/components/icons/SpeedometerIcon.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import GasIcon from '@/components/icons/GasIcon.vue'
import TransmissionIcon from '@/components/icons/TransmissionIcon.vue'
import { formatPrice } from '@/utils/formatPrice'

const currency = 43

export default {
	name: 'ProductCard',
	components: {
		SpeedometerIcon,
		LocationIcon,
		GasIcon,
		TransmissionIcon,
	},
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	methods: {
		formatPrice,
	},
	computed: {
		fullTitle() {
			return `${this.product.brand} ${this.product.model} ${this.product.year} `
		},
		convertedPrice() {
			return this.product.price * currency
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	display: flex;
	row-gap: toRem(30);
	@include adaptiveValue('column-gap', 40, 15);
	@include adaptiveValue('padding-top', 30, 15);
	@include adaptiveValue('padding-bottom', 30, 15);

	&:not(:last-child) {
		border-bottom: toRem(1) solid var(--color-gray-400);
	}

	@media (max-width: $mobileSmall) {
		flex-direction: column;
	}
	@media (min-width: $mobileSmall) {
		align-items: center;
	}
}
.title {
	font-weight: 500;
	color: var(--color-blue-400);
	letter-spacing: toRem(-1);
	@include adaptiveValue('font-size', 24, 18);
}

.image {
	aspect-ratio: 300 / 200;
	max-width: 100%;
	width: 100%;
	flex-shrink: 1;

	@media (min-width: $mobileSmall) {
		max-width: toRem(350);
	}
}
.img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.content {
	display: grid;
	gap: toRem(15);
	justify-items: start;
	// flex-shrink: 0;
}
.price {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: toRem(15);
}
.usd {
	color: var(--color-lime-600);
	font-weight: 600;
	letter-spacing: toRem(-1);
	@include adaptiveValue('font-size', 24, 18);
}
.uan {
	font-weight: 500;
	letter-spacing: toRem(-1);
	@include adaptiveValue('font-size', 20, 16);
}
.characteristics {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: toRem(10);

	// .characteristics__item
	&__item {
		display: flex;
		align-items: center;
		gap: toRem(10);
	}
}
.vin {
	border: toRem(1) solid var(--color-blue-400);
	border-radius: toRem(4);
	padding: 0 toRem(10);
}
</style>
