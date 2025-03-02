import { lessons } from '@/constants/data'

export default {
	namespaced: true,
	state: () => ({
		lessonsList: lessons,
	}),
	getters: {
		lessonsList: ({ lessonsList }) => lessonsList,
		populatedFilteredLessons:
			({ lessonsList }) =>
			(lessonsIds) => {
				const lessonsMap = Object.fromEntries(lessonsList.map((lesson) => [lesson.id, lesson]))
				return lessonsIds.map((id) => lessonsMap[id]).filter(Boolean)
			},
	},
	mutations: {},
	actions: {},
}
