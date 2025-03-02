<template>
	<div class="container wrapper">
		<div class="content">
			<h2 class="title">Крок 1. Сторінка вибору уроків</h2>
			<h3 class="title">Виберіть уроки</h3>

			<div class="list">
				<label v-for="lesson in lessonsList" :key="lesson.id" class="label">
					{{ lesson.name }}
					<input type="checkbox" class="input" :value="lesson.id" v-model="selectedLessons" />
				</label>
			</div>
			<base-button class="button" :disabled="!selectedLessons.length" @on-click="onClick">
				Вибрати вчителів
			</base-button>
		</div>
	</div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import { mapGetters } from 'vuex'
export default {
	name: 'LessonsSelectClasses',
	components: {
		BaseButton,
	},
	data() {
		return {
			selectedLessons: [],
		}
	},
	methods: {
		onClick() {
			if (this.selectedLessons.length) {
				this.$router.push({
					name: 'selectTeachers',
					params: {
						classesIds: this.selectedLessons,
					},
				})
			} else if (!this.isAuthenticated) {
				this.$router.push({
					name: 'home',
				})
			} else return
		},
	},
	computed: {
		...mapGetters('lessons', ['lessonsList']),
		...mapGetters('auth', ['isAuthenticated']),
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100svh - toRem(248));
}
.content {
}
.title {
}
.list {
	&:not(:last-child) {
		margin-bottom: toRem(20);
	}
}
.label {
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	padding-top: toRem(4);
	padding-bottom: toRem(4);

	@media (any-hover: hover) {
		&:hover {
			text-decoration: underline;
		}
	}
}
.input {
	width: auto;
	cursor: pointer;
}
</style>
