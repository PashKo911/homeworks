import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFriendsStore } from './useFriendsStore'
import { useGiftsStore } from './useGiftsStore'
import { useCrudStore } from './useCrudStore'

export const useAssignmentsStore = defineStore('assignments', () => {
	const friendsStore = useFriendsStore()
	const giftsStore = useGiftsStore()
	const assignmentsStore = useCrudStore('assignments')

	const getItemsTest = computed(() => assignmentsStore.items)

	console.log(getItemsTest)

	const populatedAssignmentsList = computed(() => {
		const friendsArr = friendsStore.getItemsList
		const giftsArr = giftsStore.getItemsList
		const assignmentsArr = assignmentsStore.items.value

		const friendsMap = Object.fromEntries(friendsArr.map((friend) => [friend.id, friend]))
		const giftsMap = Object.fromEntries(giftsArr.map((gift) => [gift.id, gift]))

		return assignmentsArr.map((assignment) => {
			const friend = friendsMap[assignment.friendId] || {}
			const gift = giftsMap[assignment.giftId] || {}
			return {
				id: assignment.id,
				friendName: friend.name || null,
				giftName: gift.name || null,
			}
		})
	})

	return {
		...useCrudStore('assignments'),
		populatedAssignmentsList,
		getItemsTest,
	}
})

/*
export const useAssignmentStore = () => {
	const assignmentStore = useCrudStore('assignments')
	const friendStore = useCrudStore('friends')
	const giftStore = useCrudStore('gifts')

	const populatedAssignmentsList = ref([])

	function computePopulation() {
		const friendsArr = friendStore.getItemsList
		const giftsArr = giftStore.getItemsList
		const assignmentsArr = assignmentStore.getItemsList

		const friendsMap = Object.fromEntries(friendsArr.map((friend) => [friend.id, friend]))
		const giftsMap = Object.fromEntries(giftsArr.map((gift) => [gift.id, gift]))

		populatedAssignmentsList.value = assignmentsArr.map((assignment) => {
			const friend = friendsMap[assignment.friendId] || {}
			const gift = giftsMap[assignment.giftId] || {}
			return {
				id: assignment.id,
				friendName: friend.name || null,
				giftName: gift.name || null,
			}
		})
	}

	assignmentStore.populatedAssignmentsList = populatedAssignmentsList
	assignmentStore.computePopulation = computePopulation

	return assignmentStore
}
*/
