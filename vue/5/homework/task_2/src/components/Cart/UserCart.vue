<template>
	<div class="wrapper">
		<h2 class="title">Cart</h2>
		<div class="items">
			<cart-item
				v-for="cartProduct in cartList"
				:key="cartProduct.id"
				:cart-product="cartProduct"
				@change-amount="onChangeAmount"
				@delete="onDelete" />
		</div>
		<div class="total">
			<div class="price">{{ totalPrice }}₴</div>
			<button-green title="Оформити замовлення" />
		</div>
	</div>
</template>

<script>
import ButtonGreen from '../ui/ButtonGreen.vue'
import CartItem from './CartItem.vue'
export default {
	components: { CartItem, ButtonGreen },
	name: 'UserCart',
	props: {
		cartList: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		onChangeAmount({ amount, id }) {
			this.$emit('changeAmount', { amount, id })
		},
		onDelete(id) {
			this.$emit('delete', id)
		},
	},
	computed: {
		totalPrice() {
			return this.cartList.reduce((acc, product) => acc + product.price * product.amount, 0)
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
}
.title {
	margin-bottom: 3.75rem;
	font-size: clamp(1.5rem, 1.187rem + 1.57vw, 2.625rem);
	font-weight: bold;
	text-align: center;
}
.items {
	display: grid;
	gap: 1.875rem;
	&:not(:last-child) {
		margin-bottom: 2.5rem;
	}
}
.total {
	background-color: rgb(0, 160, 70, 0.1);
	border: 0.0625rem solid #00a046;
	display: flex;
	align-items: center;
	gap: 1.875rem;
	align-self: flex-end;
	justify-content: center;
	padding: 1.5rem;
	flex-wrap: wrap;
	border-radius: 0.25rem;
}
.price {
	font-size: clamp(1.5rem, 1.291rem + 1.04vw, 2.25rem);
	font-weight: 500;
}
</style>
