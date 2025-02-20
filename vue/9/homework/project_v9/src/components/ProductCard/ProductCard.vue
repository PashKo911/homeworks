<template>
	<article class="article">
		<div class="img-wrp">
			<img class="img" :src="productData.imgSrc" :alt="productData.name" />
		</div>
		<div class="content">
			<h3 class="title">
				{{ productData.name }}
			</h3>
			<div class="prices">
				<div class="price">{{ formattedPrice }} ₴</div>
				|
				<div class="old-price">{{ formattedOldPrice }} ₴</div>
				<edit-icon class="edit" @click="onEdit(productData.id)" />
				<delete-icon class="delete" @click="onDelete(productData.id)" />
			</div>
		</div>
	</article>
</template>

<script>
import EditIcon from '../icons/EditIcon.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'
export default {
	components: { EditIcon, DeleteIcon },
	name: 'ProductCard',
	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
	methods: {
		formatPrice(price) {
			return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		},
		onEdit(id) {
			this.$router.push({
				name: 'editProduct',
				params: {
					productId: id,
				},
			})
		},
		onDelete(id) {
			this.$emit('onDelete', id)
		},
	},
	computed: {
		formattedPrice() {
			return this.formatPrice(this.productData.price)
		},
		formattedOldPrice() {
			return this.formatPrice(this.productData.oldPrice)
		},
	},
}
</script>

<style lang="scss" scoped>
.article {
	display: grid;
	gap: toRem(10);
	position: relative;

	@media (any-hover: hover) {
		&:hover .edit,
		&:hover .delete {
			opacity: 1;
		}
	}
}
.img-wrp {
	width: 100%;
	// min-height: toRem(215);
	height: toRem(215);
}
.img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
.content {
	padding: 0 toRem(10);
}
.title {
	font-weight: 500;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	&:not(:last-child) {
		margin-bottom: toRem(15);
	}

	@include adaptiveValue('font-size', 24, 18);
}
.prices {
	display: flex;
	align-items: center;
	gap: toRem(10);
}
.price {
	font-size: toRem(22);
	font-weight: 500;
	color: var(--color-red-500);
}
.old-price {
	color: var(--color-gray-400);
	text-decoration: line-through;
}
.edit {
	margin-left: auto;
}
.edit,
.delete {
	cursor: pointer;

	@media (any-hover: hover) {
		will-change: transform;
		transition: transform 0.2s, opacity 0.2s;
		opacity: 0;

		&:hover {
			transform: scale(1.2);
		}
	}
}
</style>
