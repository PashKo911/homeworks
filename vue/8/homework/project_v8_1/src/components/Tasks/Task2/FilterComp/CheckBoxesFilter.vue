<template>
	<div class="body">
		<h2>{{ title }}</h2>
		<ul class="list">
			<li v-for="item in items" :key="item.id" class="item">
				<label class="label">
					<input :value="item.id" class="input" type="checkbox" v-model="selectedInputs" />
					{{ item.name }}
				</label>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CheckBoxesFilter',
	props: {
		items: {
			type: Array,
			default: [],
		},
		modelValue: {
			type: Array,
			default: [],
		},
		title: {
			type: String,
			default: 'Title',
		},
	},
	computed: {
		selectedInputs: {
			get() {
				return this.modelValue
			},
			set(newVal) {
				this.$emit('update:modelValue', newVal)
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.body {
	display: grid;
	gap: toRem(10);
}
.list {
	display: grid;
	gap: toRem(5);
}
.item {
}
.label {
	display: flex;
	align-items: center;
	gap: toRem(15);
	line-height: 1.1;
}
.input {
	width: max-content;
}
</style>
