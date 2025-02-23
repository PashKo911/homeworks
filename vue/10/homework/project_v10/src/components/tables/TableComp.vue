<template>
	<div class="table">
		<div class="row row--head">
			<div v-for="column in columns" :key="column.key" class="data">
				{{ column.label }}
			</div>
			<div class="data">Actions</div>
		</div>

		<div class="list">
			<div class="row" v-for="item in data" :key="item.id">
				<div v-for="column in columns" :key="column.key" class="data">
					{{ item[column.key] }}
				</div>
				<div class="data data--actions">
					<edit-icon class="icon" v-if="editable" @click="onEdit(item.id)" />
					<delete-icon class="icon" @click="onDelete(item.id)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DeleteIcon from '../icons/DeleteIcon.vue'
import EditIcon from '../icons/EditIcon.vue'

export default {
	name: 'UniversalTable',
	emits: ['onEdit', 'onDelete'],
	components: { DeleteIcon, EditIcon },
	props: {
		data: {
			type: Array,
			required: true,
		},
		columns: {
			type: Array,
			required: true,
		},
		editable: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		onEdit(id) {
			this.$emit('onEdit', id)
		},
		onDelete(id) {
			this.$emit('onDelete', id)
		},
	},
}
</script>

<style lang="scss" scoped>
.table {
	border-top: toRem(1) solid #000;
	border-left: toRem(1) solid #000;
}

.row {
	display: grid;
	grid-template-columns: 1.1fr 1fr 1fr;
	// .list--head
	&--head {
		.data {
			font-weight: 600;
			text-align: center;
			justify-content: center;
			@include adaptiveValue('font-size', 20, 18);
		}
	}
}

.data {
	overflow: hidden;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	padding: toRem(5);
	display: flex;
	align-items: center;
	border-right: toRem(1) solid #000;
	border-bottom: toRem(1) solid #000;
	font-weight: 500;

	// .data--actions
	&--actions {
		justify-content: center;
		gap: toRem(15);
	}
	// .data--experience
	&--experience {
		justify-content: center;
	}
}

.icon {
	cursor: pointer;
	transition: transform 0.2s;
	will-change: transform;

	@media (any-hover: hover) {
		&:hover {
			transform: scale(1.2);
		}
	}
}
</style>
