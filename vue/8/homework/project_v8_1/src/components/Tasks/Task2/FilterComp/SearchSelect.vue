<template>
	<div class="body">
		<label :for="uniqueId" class="label">
			{{ title }}
		</label>
		<div class="scroll-wrp">
			<div class="input-wrp">
				<input
					:id="uniqueId"
					class="input"
					type="search"
					:placeholder="placeholderValue"
					v-model.trim="searchItem"
					autocomplete="off"
					@focus="onFocus"
					@blur="onBlur" />
				<arrow-down class="icon" v-show="isArrowIconVisible" />
				<search class="icon" v-show="isSearchIconVisible" />
				<close-icon class="icon" v-show="searchItem" @click="onSelect(null, null)" />
			</div>
			<ul class="list" v-show="isItemsVisible">
				<li class="item" @mousedown="onSelect(null, 'Будь-яка')">Будь-яка</li>
				<li
					v-for="item in filteredItems"
					class="item"
					:key="item.id"
					@mousedown="onSelect(item.id, item.name)">
					{{ item.name }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import ArrowDown from '@/components/icons/ArrowDown.vue'
import Search from '@/components/icons/Search.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import { v4 as uuidv4 } from 'uuid'

export default {
	name: 'SearchSelect',
	components: {
		ArrowDown,
		Search,
		CloseIcon,
	},
	props: {
		items: {
			type: Array,
			default: [],
		},
		title: {
			type: String,
			default: 'Марка',
		},
		placeholder: {
			type: String,
			default: 'Оберіть',
		},
		placeholderActive: {
			type: String,
			default: 'Пошук...',
		},
		modelValue: {
			type: [String, Number],
			default: null,
		},
	},
	data() {
		return {
			searchItem: null,
			placeholderValue: this.placeholder,
			isItemsVisible: false,
			uniqueId: uuidv4(),
		}
	},
	methods: {
		onSelect(id, name) {
			this.searchItem = name
			this.$emit('update:modelValue', id)
		},
		onClear() {
			this.searchItem = null
		},
		onFocus() {
			this.isItemsVisible = true
			if (!this.searchItem) {
				this.placeholderValue = this.placeholderActive
			} else {
				this.searchItem = null
			}
		},
		onBlur() {
			this.isItemsVisible = false
			this.placeholderValue = this.placeholder
		},
	},
	computed: {
		filteredItems() {
			if (this.searchItem) {
				const searchItemLower = this.searchItem.toLowerCase()
				return this.items.filter((item) => item.name.toLowerCase().includes(searchItemLower))
			} else {
				return this.items
			}
		},
		isArrowIconVisible() {
			return !this.isItemsVisible && !this.searchItem
		},
		isSearchIconVisible() {
			return this.isItemsVisible && !this.searchItem
		},
	},
}
</script>

<style lang="scss" scoped>
.body {
	max-width: toRem(200);
	display: grid;
	gap: toRem(5);
}
.label {
}
.scroll-wrp {
	position: relative;
}
.input-wrp {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	position: relative;
	cursor: pointer;

	&:has(.input:focus-visible) {
		border: toRem(1) solid var(--color-blue-400);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.input {
		padding: toRem(3) toRem(10);
		cursor: default;

		&:focus-visible {
			outline: none;
		}
		&::placeholder {
			color: #000;
		}
	}
	input[type='search' i].input::-webkit-search-cancel-button {
		display: none;
	}

	.icon {
		position: absolute;
		top: 50%;
		right: toRem(3);
		transform: translate(0, -50%);
	}
}

.list {
	position: absolute;
	top: 100%;
	left: 0;
	background-color: #fff;
	width: 100%;
	border: toRem(1) solid var(--color-blue-400);
	border-top: none;
	border-bottom-left-radius: toRem(4);
	border-bottom-right-radius: toRem(4);
	max-height: toRem(150);
	overflow-y: auto;
	z-index: 2;
}
.item {
	cursor: pointer;
	padding: toRem(3) toRem(10);

	@media (any-hover: hover) {
		&:hover {
			background-color: var(--color-blue-400);
			color: #fff;
		}
	}
}
</style>
