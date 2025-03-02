export default [
	{
		path: '/lessons',
		name: 'lessons',
		redirect: { name: 'selectClasses' },
		meta: { requiresAuth: false },

		children: [
			{
				path: 'select',
				name: 'selectClasses',
				component: () => import('@/views/lessons/LessonsSelectClasses.vue'),
				meta: { requiresAuth: true },
			},
			{
				path: ':classesIds(\\d+)+',
				name: 'selectTeachers',
				component: () => import('@/views/lessons/LessonsSelectTeachers.vue'),
				meta: { requiresAuth: true },
				// Перехід саме з першого кроку згідно умові
				beforeEnter: (to, from) => {
					if (from.name !== 'selectClasses') {
						return {
							name: 'selectClasses',
						}
					}
				},
			},
			{
				path: ':complianceIds(\\d+-\\d+)+',
				name: 'lessonsReport',
				component: () => import('@/views/lessons/LessonsReport.vue'),
				meta: { requiresAuth: false },
			},
		],
	},
]
