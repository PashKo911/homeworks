import { teachers } from '@/constants/data'

export default {
	namespaced: true,
	state: () => ({
		teachers,
	}),
	getters: {
		teachersList: ({ teachers }) => teachers,
		populatedFilteredTeachers:
			({ teachers }) =>
			(teachersIds) => {
				const teachersMap = Object.fromEntries(teachers.map((teachers) => [teachers.id, teachers]))
				return teachersIds.map((id) => teachersMap[id]).filter(Boolean)
			},
	},
	mutations: {},
	actions: {},
}
