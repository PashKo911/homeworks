<template>
	<div>
		<select class="select" v-model="selectedTransportType">
			<option class="option" :value="null">Усі типи транспорту</option>
			<option v-for="type in items" :value="type.id" :key="type.id">
				{{ type.name }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'RegularSelect',
	props: {
		items: {
			type: Array,
			default: [],
		},
		modelValue: {
			type: [String, Number],
			default: null,
		},
	},
	computed: {
		selectedTransportType: {
			get() {
				return this.modelValue
			},
			set(id) {
				this.$emit('update:modelValue', id)
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.select {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	font-size: toRem(16);
	font-family: inherit;
	width: 100%;
	padding: toRem(3) toRem(10);
}
.option {
}
</style>
