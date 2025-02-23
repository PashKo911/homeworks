<template>
	<div class="wrapper" :class="{ active: searchValue }">
		<search-icon class="icon" @click="onSearch" />
		<close-icon class="icon-close" @click="onClear" />
		<input type="text" class="input" :placeholder="placeholder" v-model.trim.lazy="searchValue" />
	</div>
</template>

<script>
import CloseIcon from '../icons/CloseIcon.vue'
import SearchIcon from '../icons/SearchIcon.vue'
export default {
	components: { SearchIcon, CloseIcon },
	name: 'SearchFilter',
	props: {
		placeholder: {
			type: String,
			default: 'Search',
		},
		modelValue: {
			type: String,
			default: null,
		},
	},
	methods: {
		onSearch() {
			this.$emit('update:modelValue', this.searchValue)
		},
		onClear() {
			this.$emit('update:modelValue', null)
		},
	},
	computed: {
		searchValue: {
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
.wrapper {
	position: relative;
	overflow: hidden;
	display: inline-block;
}
.input {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	padding: toRem(3) toRem(34) toRem(3) toRem(10);
	width: max-content;

	&::placeholder {
		color: #000;
		transition: opacity 0.2s;
	}
	&:focus::placeholder {
		opacity: 0;
	}
}
.icon {
	position: absolute;
	top: 50%;
	right: toRem(5);
	transform: translate(0, -50%);
	cursor: pointer;
	transition: top 0.2s, transform 0.2s;

	.active & {
		top: 100%;
		transform: translate(0, 0);
	}
}
.icon-close {
	top: -100%;
	transform: translate(0, 0);
	position: absolute;
	right: toRem(5);
	cursor: pointer;
	transition: top 0.2s, transform 0.2s;

	.active & {
		top: 50%;
		transform: translate(0, -50%);
	}
}
</style>
