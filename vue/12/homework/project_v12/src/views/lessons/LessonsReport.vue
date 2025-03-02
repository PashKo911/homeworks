<template>
	<div class="container wrapper">
		<div class="content">
			<h2 class="title">Навчальний план</h2>
			<div class="items">
				<ul class="list">
					<li v-for="l in selectedLessons" :key="l.id" class="item">
						{{ l.name }}
					</li>
				</ul>
				<ul class="list">
					<li v-for="l in selectedLessons" :key="l.id" class="item">-</li>
				</ul>
				<ul class="list">
					<li v-for="t in selectedTeachers" :key="t.id" class="item">
						{{ t.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'LessonsReport',
	computed: {
		...mapGetters('lessons', ['populatedFilteredLessons']),
		...mapGetters('teachers', ['populatedFilteredTeachers']),
		selectedLessonsIds() {
			return this.$route.params.complianceIds.map((pair) => pair.split('-')[0])
		},
		selectedTeachersIds() {
			return this.$route.params.complianceIds.map((pair) => pair.split('-')[1])
		},
		selectedTeachers() {
			return this.populatedFilteredTeachers(this.selectedTeachersIds)
		},
		selectedLessons() {
			return this.populatedFilteredLessons(this.selectedLessonsIds)
		},
	},
}
</script>

<style lang="scss" scoped>
.items {
	display: flex;
	gap: toRem(15);
	justify-content: center;
}
.list {
	display: grid;
	gap: toRem(5);
}
</style>
