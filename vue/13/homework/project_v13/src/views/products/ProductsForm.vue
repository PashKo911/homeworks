<template>
	<form class="form">
		<h2 class="title">Add Product</h2>
		<label class="label">
			Title:
			<input type="text" class="input" />
		</label>
		<label class="label">
			Price:
			<input type="number" class="input" />
		</label>
		<label class="label">
			Choose File:
			<input type="file" class="input-img" />
		</label>
		<base-button class="button" />
	</form>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
export default {
	name: 'ProductsEditor',
	components: {
		BaseButton,
	},
}
</script>
<style lang="scss" scoped>
.form {
	border-radius: toRem(15);
	box-shadow: 0 0 toRem(9) rgb(0, 0, 0, 0.15);
	width: 100%;
	max-width: toRem(600);
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: toRem(15);
	@include adaptiveValue('padding', 40, 15, 0, 600, 320);
}

.title {
	grid-column: span 2;
	justify-self: center;
}

.label {
	font-weight: 500;
	display: grid;
	gap: toRem(5);
}
.input {
	border: toRem(1) solid var(--color-black);
	border-radius: toRem(4);
	padding: toRem(2) toRem(8);
}
.input-img {
	grid-column: span 2;
}

.button {
	grid-column: span 2;
	justify-self: center;
}
</style>
