<template>
	<main-layout>
		<div class="container fullscreen pt-[6.25rem] pb-8">
			<h2 class="title text-center">
				{{ $t('contacts.title') }}
			</h2>
		</div>
	</main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'

export default {
	name: 'ContactsPage',
	components: { MainLayout },
}
</script>

<style lang="scss" scoped></style>
