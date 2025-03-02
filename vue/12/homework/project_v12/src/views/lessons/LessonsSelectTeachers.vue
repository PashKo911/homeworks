<template>
	<div class="container wrapper">
		<div class="content">
			<h2 class="title">Крок 2. Вибір вчителів</h2>
			<div class="items">
				<div v-for="l in selectedLessons" :key="l.id" class="item">
					<h3 class="title">
						{{ l.name }}
					</h3>
					<select class="select" v-model="selectedPairs[l.id]">
						<option :value="undefined" disabled class="option">Select Teacher</option>
						<option v-for="t in teachersList" :key="t.id" :value="t.id" class="option">
							{{ t.name }}
						</option>
					</select>
				</div>
			</div>

			<base-button class="button" :disabled="!isAllPairsSelected" @on-click="onClick">
				Розпочати навчання
			</base-button>
		</div>
	</div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'LessonsSelectTeacher',
	components: {
		BaseButton,
	},
	data() {
		return {
			selectedPairs: {},
		}
	},

	methods: {
		queryParamsFormatter(obj) {
			return Object.entries(obj).map(([key, value]) => `${key}-${value}`)
		},
		onClick() {
			if (this.isAllPairsSelected) {
				this.$router.push({
					name: 'lessonsReport',
					params: {
						complianceIds: this.queryParamsFormatter(this.selectedPairs),
					},
				})
			} else {
				this.$router.push({
					name: 'notFound',
				})
			}
		},
	},

	computed: {
		...mapGetters('lessons', ['populatedFilteredLessons']),
		...mapGetters('teachers', ['teachersList']),
		selectedLessons() {
			return this.populatedFilteredLessons(this.$route.params.classesIds)
		},
		isAllPairsSelected() {
			const selectedPairsNumber = Object.keys(this.selectedPairs).length

			return selectedPairsNumber && selectedPairsNumber === this.selectedLessons.length
		},
	},
}
</script>

<style lang="scss" scoped>
.content {
	display: grid;
	gap: toRem(30);
}

.items {
	display: grid;
	row-gap: toRem(20);
}

h3.title {
	margin-bottom: 0;
}
.item {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	column-gap: toRem(15);
	row-gap: toRem(5);
}
.select {
	border: toRem(1) solid #000;
	border-radius: toRem(4);
	font-family: inherit;
	font-size: inherit;
}
.option {
}
.button {
}
</style>
