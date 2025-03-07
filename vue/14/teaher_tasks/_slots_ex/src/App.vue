<template>
	<div class="wrapper">
		<div class="homework">
			<h2 class="title">Домашнє завдання</h2>
			<div class="items">
				<paginated-comp-with-mode
					title="Список працівників"
					:workers-list="workersList"
					:mode="2"
					:paginationMode="1" />
				<paginated-comp-with-mode
					title="Список працівників"
					:workers-list="workersList"
					:mode="1"
					:paginationMode="2" />
			</div>
		</div>
		<div class="teacher-tasks">
			<h2 class="title">Зроблені на уроці</h2>
			<div class="items">
				<paginated-comp title="Список працівників" :workers-list="workersList" />
				<paginated-comp-exp :workersList="workersList" />
				<paginated-comp
					title="Стаж працівників"
					:workers-list="workersList"
					:initial-page-index="outerCurrentPageIndex">
					<template #header="{ workersList }"> Всього - {{ workersList.length }} осіб </template>
					<template #default="{ currentPageWorkersList }">
						<div v-for="worker in currentPageWorkersList" :key="worker.id">
							{{ worker.name }} - {{ worker.experience }}
						</div>
					</template>
					<template #footer="{ pagesNumber, currentPage }">
						<button :disabled="currentPage === 1" @click="outerCurrentPageIndex--">
							{{ `<=` }}
						</button>
						<button :disabled="currentPage === pagesNumber" @click="outerCurrentPageIndex++">
							{{ `=>` }}
						</button>
					</template>
				</paginated-comp>
				<paginated-comp-with-mode title="Список працівників" :workers-list="workersList" :mode="2" />
			</div>
		</div>
	</div>
</template>

<script>
import PaginatedComp from './components/test_slots/PaginatedComp.vue'
import PaginatedCompExp from './components/test_slots/PaginatedCompExp.vue'
import PaginatedCompWithMode from './components/test_dyn_comp/PaginatedCompWithMode.vue'

export default {
	components: {
		PaginatedComp,
		PaginatedCompExp,
		PaginatedCompWithMode,
		PaginatedCompWithMode,
	},

	data() {
		return {
			workersList: [
				{ id: 1, name: 'Andrii Ivanov', experience: 5, salary: 35000 },
				{ id: 2, name: 'Olha Petrenko', experience: 8, salary: 42000 },
				{ id: 3, name: 'Serhiy Shevchenko', experience: 2, salary: 28000 },
				{ id: 4, name: 'Yuliia Kovalenko', experience: 10, salary: 50000 },
				{ id: 5, name: 'Dmytro Bondarenko', experience: 3, salary: 31000 },
				{ id: 6, name: 'Mykola Tkachenko', experience: 7, salary: 39000 },
				{ id: 7, name: 'Iryna Samoilova', experience: 1, salary: 25000 },
				{ id: 8, name: 'Oleksiy Hryhorenko', experience: 4, salary: 33000 },
				{ id: 9, name: 'Natalia Voloshyna', experience: 6, salary: 37000 },
				{ id: 10, name: 'Oksana Fedorova', experience: 9, salary: 45000 },
				{ id: 11, name: 'Bohdan Kuznetsov', experience: 12, salary: 53000 },
				{ id: 12, name: 'Kateryna Savchenko', experience: 5, salary: 35000 },
				{ id: 13, name: 'Vadym Poltavets', experience: 3, salary: 31000 },
				{ id: 14, name: 'Tetyana Kravchuk', experience: 8, salary: 42000 },
				{ id: 15, name: 'Oleh Zakharchenko', experience: 7, salary: 39000 },
				{ id: 16, name: 'Anastasiya Kostenko', experience: 2, salary: 28000 },
				{ id: 17, name: 'Yevhenii Pylypenko', experience: 10, salary: 50000 },
				{ id: 18, name: 'Svitlana Shcherbak', experience: 6, salary: 37000 },
				{ id: 19, name: 'Oleksandra Marchenko', experience: 4, salary: 33000 },
				{ id: 20, name: 'Roman Kolomiets', experience: 1, salary: 25000 },
			],
			outerCurrentPageIndex: 1,
		}
	},
}
</script>
<style lang="scss" scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

header {
	display: flex;
	place-items: center;
	padding-right: calc(var(--section-gap) / 2);
}

.logo {
	margin: 0 2rem 0 0;
}

header .wrapper {
	display: flex;
	place-items: flex-start;
	flex-wrap: wrap;
}

.teacher-tasks {
}

.title {
	&:not(:last-child) {
		margin-bottom: 30px;
	}
}
.items {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.875rem;
}
.wrapper {
	width: 100%;
	display: flex;
	gap: 1.875rem;
	align-items: flex-start;
}
</style>
