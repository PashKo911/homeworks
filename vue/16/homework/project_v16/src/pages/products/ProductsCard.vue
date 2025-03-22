<template>
	<article
		class="relative flex flex-col gap-4 p-4 bg-white dark:bg-surface-900 border-b border-gray-200 dark:border-surface-700 border-r border-gray-200">
		<SpeedDial
			v-if="userPermissions.delete"
			:model="items"
			direction="down"
			hideOnClickOutside
			style="position: absolute; top: 5px; right: 5px" />
		<div class="aspect-[3/2] grow grid place-items-center">
			<img :src="productData.imgSrc" :alt="productData.title" class="w-full max-h-full object-contain" />
		</div>
		<h3 class="title line-clamp-2">
			{{ productData.title }}
		</h3>
		<div class="flex items-center justify-between gap-4">
			<div class="text-lg font-bold md:text-xl text-right text-red-500">
				{{ productData.price }}{{ $t('currency.symbol') }}
			</div>
			<Button :label="$t('actionTitles.buyButton')" icon=" pi pi-shopping-cart" />
		</div>
	</article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'ProductsCard',
	props: {
		productData: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			items: [
				{
					label: 'Add',
					icon: 'pi pi-pencil',
					command: () => {
						this.$emit('onEdit', this.productData.id)
					},
				},
				{
					label: 'Delete',
					icon: 'pi pi-trash',
					command: () => {
						this.$emit('onDelete', this.productData.id)
					},
				},
			],
		}
	},
	computed: {
		...mapGetters('users', ['userPermissions']),
	},
}
</script>
