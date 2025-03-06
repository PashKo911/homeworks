<template>
	<div class="filter">
		<div class="tabs">
			<label class="label">
				Most Relevant
				<input type="radio" name="filter" checked class="input" />
			</label>
			<label class="label">
				Most Popular
				<input type="radio" name="filter" class="input" />
			</label>
			<label class="label">
				Highest Rated
				<input type="radio" name="filter" class="input" />
			</label>
		</div>
		<select class="select">
			<option class="option">Newest First</option>
			<option class="option">Oldest First</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'ProductsSelector',
}
</script>

<style lang="scss" scoped>
.filter {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: toRem(30);
	flex-wrap: wrap;
	&:not(:last-child) {
		margin-bottom: toRem(15);
	}
}
.tabs {
	display: flex;
	align-items: center;
	border: toRem(1) solid #000;
	border-radius: toRem(50);
	padding: toRem(5) toRem(5);
	column-gap: toRem(5);
}

.label {
	padding: toRem(5) toRem(15);
	border-radius: toRem(50);
	cursor: pointer;
	transition: background-color 0.2s;
	@media (any-hover: hover) {
		&:hover {
			background-color: #f0e1e1;
		}
	}
}

.label:has(input:checked) {
	background-color: var(--main-color);
	color: var(--color-white);
}

.input {
	display: none;
}
.select {
	border: toRem(1) solid var(--color-black);
	border-radius: toRem(4);
	font-family: inherit;
	font-size: inherit;
	padding-left: toRem(5);
	padding-right: toRem(5);
}
.option {
}
</style>
