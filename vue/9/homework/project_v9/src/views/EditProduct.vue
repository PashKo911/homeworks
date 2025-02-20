<template>
	<div class="container">
		<div class="wrapper">
			<label class="label">
				Назва:
				<input type="text" class="input" v-model.trim.lazy="productData.name" />
			</label>
			<label class="label">
				Ціна:
				<input type="number" class="input" v-model.lazy="productData.price" />
			</label>
			<label class="label">
				Стара ціна:
				<input type="number" class="input" v-model.lazy="productData.oldPrice" />
			</label>
			<select class="select" v-model="productData.categoryId">
				<option value="null" class="option">Оберіть категорію</option>
				<option v-for="category in categoriesList" :key="category.id" :value="category.id">
					{{ category.name }}
				</option>
			</select>
			<label class="label">
				Посилання на зображення:
				<input type="string" class="input" v-model.lazy.trim="productData.imgSrc" />
			</label>
			<button class="button" @click="onSubmit">{{ buttonTitle }}</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'EditProduct',
	data() {
		return {
			productData: {
				categoryId: null,
			},
		}
	},
	methods: {
		...mapActions(['editProduct', 'addProduct']),
		onSubmit() {
			if (this.productId) this.editProduct(this.productData)
			else this.addProduct(this.productData)

			this.$router.push({
				name: 'products',
				params: {
					categoryId: this.productData.categoryId,
				},
			})
		},
	},
	computed: {
		...mapGetters(['categoriesList', 'getProductById']),
		productId() {
			return this.$route.params.productId
		},
		buttonTitle() {
			return this.productId ? 'Редагувати' : 'Додати'
		},
	},
	created() {
		if (this.productId) this.productData = { ...this.getProductById(this.productId) }
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100svh - toRem(248));
}
.wrapper {
	border-radius: toRem(15);
	box-shadow: 0 0 toRem(14) rgba(0, 0, 0, 0.15);
	max-width: toRem(1000);
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: toRem(20);
	@include adaptiveValue('padding', 30, 15);

	@media (max-width: $mobileSmall) {
		grid-template-columns: 1fr;
	}
}
.label {
	font-weight: 500;
	display: grid;
	gap: toRem(5);
}
.input {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	padding: toRem(4) toRem(10);
}
.select {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	align-self: end;
	padding: 0 toRem(10);
	min-height: toRem(31.5);
	font-family: inherit;
	font-size: inherit;
}
.option {
	font-size: inherit;
	font-family: inherit;
}
.button {
	width: max-content;
	justify-self: center;

	@media (min-width: $mobileSmall) {
		grid-column: span 2;
	}
}
</style>
