<template>
	<div class="container wrapper">
		<div class="content">
			<h2 class="title">Перелік вчителів</h2>
			<div v-for="t in teachersList" :key="t.id" class="item">
				{{ t.name }}
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'TeachersView',
	computed: {
		...mapGetters('teachers', ['teachersList']),
	},
}
</script>

<style lang="scss" scoped></style>
