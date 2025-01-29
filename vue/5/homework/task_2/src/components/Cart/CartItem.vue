<template>
	<article class="article">
		<div class="top">
			<div class="img">
				<div class="discount">-{{ discountInPercent }}%</div>
				<img :src="cartProduct.imgSrc" :alt="cartProduct.title" />
			</div>
			<div class="right">
				<h3 class="title">
					{{ cartProduct.title }}
				</h3>
			</div>
		</div>
		<div class="bottom">
			<div class="counter">
				<button class="decrease" @click="onChangeAmount(-1)"></button>
				<input
					class="input"
					type="number"
					min="1"
					v-model.number.lazy="cartProductAmount"
					@change="onManualChange" />
				<button class="increase" @click="onChangeAmount(1)"></button>
			</div>
			<div class="price">
				<span class="old-price"> {{ productTotalDiscount }}₴</span>
				<span class="current-price"> {{ productTotalPrice }}₴</span>
			</div>
		</div>
		<button class="delete" @click="onDelete"></button>
	</article>
</template>

<script>
export default {
	name: 'CartItem',
	props: {
		cartProduct: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			cartProductAmount: this.cartProduct.amount,
		}
	},
	methods: {
		validateAmount() {
			if (this.cartProductAmount < 1 || isNaN(this.cartProductAmount)) {
				this.cartProductAmount = 1
			}
		},
		onChangeAmount(num) {
			this.cartProductAmount += num
			this.validateAmount()
		},
		onManualChange() {
			this.validateAmount()
		},
		onDelete() {
			this.$emit('delete', this.cartProduct.id)
		},
	},
	computed: {
		discountInPercent() {
			const discount = (this.cartProduct.discount / this.cartProduct.oldPrice) * 100
			return discount.toFixed(0)
		},
		productTotalPrice() {
			return this.cartProduct.price * this.cartProduct.amount
		},
		productTotalDiscount() {
			return this.cartProduct.discount * this.cartProduct.amount
		},
	},
	watch: {
		cartProductAmount(amount) {
			this.$emit('change-amount', { amount, id: this.cartProduct.id })
		},
		'cartProduct.amount'(newValue) {
			this.cartProductAmount = newValue
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	padding: clamp(0.938rem, 0.503rem + 2.17vw, 2.5rem);
	border: 0.0625rem solid gray;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	position: relative;
}
.top {
	display: flex;
	align-items: center;
	gap: 1.875rem;
	&:not(:last-child) {
		margin-bottom: 1.25rem;
	}

	@media (max-width: 35.9363rem) {
		flex-direction: column;
		align-items: flex-start;
	}
}
.img {
	display: block;
	max-width: 15.625rem;
	flex-shrink: 0;
	position: relative;

	img {
		width: 100%;
		object-fit: cover;
	}
}
.discount {
	position: absolute;
	top: 0%;
	left: 0%;
	color: #fff;
	background-color: red;
	padding: 0.125rem 0.5rem;
	border-radius: 3.125rem;
	font-size: 0.875rem;
	font-weight: 600;
}
.right {
	display: flex;
	flex-direction: column;
}
.title {
	font-weight: 500;
	font-size: clamp(1.125rem, 1.021rem + 0.52vw, 1.5rem);
}
.bottom {
	align-self: flex-end;
	display: flex;
	align-items: center;
	gap: 0.625rem;
}
.counter {
	display: flex;
	align-items: center;
	gap: 0.625rem;
}

.input {
	width: 3.5rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	border: 0.0625rem solid #d2d2d2;
	border-radius: 0.5rem;
	height: 2.5rem;
	font-size: 1.125rem;
	text-align: center;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
	appearance: none;
	margin: 0;
}

.decrease,
.increase {
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform 0.2s;

	@media (any-hover: hover) {
		&:hover {
			transform: scale(1.1);
		}
	}
}

.decrease {
	background: url('/public/icons/minus.svg') center / contain no-repeat;
}
.increase {
	background: url('/public/icons/plus.svg') center / 2.5rem 2.5rem no-repeat;
}
.price {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.old-price {
	font-weight: 500;
	color: rgb(164, 161, 161);
	position: relative;
	align-self: flex-end;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		height: 0.0625rem;
		width: 100%;
		transform: translate(0, -50%);
		background-color: rgb(164, 161, 161);
	}
}
.current-price {
	font-weight: 500;
	color: red;
	font-size: 1.25rem;
}

.delete {
	width: 1.875rem;
	height: 1.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: clamp(0.938rem, 0.503rem + 2.17vw, 2.5rem); /* 40/338 */
	right: clamp(0.938rem, 0.503rem + 2.17vw, 2.5rem); /* 40/1440 */
	background: url('/public/icons/del.svg') center / contain no-repeat;
	transition: transform 0.2s;

	@media (any-hover: hover) {
		&:hover {
			transform: scale(1.2);
		}
	}
}
</style>
