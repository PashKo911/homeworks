<template>
	<div class="relative flex items-center">
		<button
			v-styleclass="{
				selector: '@next',
				enterFromClass: 'hidden',
				enterActiveClass: 'animate-scalein',
				leaveToClass: 'hidden',
				leaveActiveClass: 'animate-fadeout',
				hideOnOutsideClick: true,
			}"
			class="w-10 rounded-full aspect-square overflow-hidden hover:ring-1 hover:ring-primary hover:ring-offset-2 hover:ring-offset-surface-0 dark:hover:ring-offset-surface-950 outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-950 transition-shadow duration-300">
			<img class="w-full h-full object-cover" :src="getUser.photoURL" alt="" />
		</button>

		<div class="absolute top-[54px] right-0 origin-top z-50 hidden">
			<box-wrapper class="grid gap-6 place-items-center w-[350px]">
				<div class="text-sm">
					{{ getUser.email }}
				</div>
				<div class="w-16 aspect-square rounded-full overflow-hidden">
					<img class="w-full h-full object-cover" :src="getUser.photoURL" :alt="getUser.displayName" />
				</div>
				<div class="font-medium">Hello {{ getUser.displayName }}</div>
				<Button icon="pi pi-sign-out" label="Logout" severity="contrast" @click="$emit('onLogout')"> </Button>
			</box-wrapper>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import BoxWrapper from './BoxWrapper.vue'
export default {
	components: { BoxWrapper },
	name: 'AvatarComp',
	computed: {
		...mapGetters('auth', ['getUser']),
	},
}
</script>
