import { ref } from 'vue'
import { useCrudStore } from './useCrudStore'

export const useAssignmentStore = () => {
	const assignmentStore = useCrudStore('assignments')()
	const friendStore = useCrudStore('friends')()
	const giftStore = useCrudStore('gifts')()

	const populatedAssignmentsList = ref([])

	function computePopulation() {
		const friendsArr = Array.isArray(friendStore.getItemsList.value) ? friendStore.getItemsList.value : []
		const giftsArr = Array.isArray(giftStore.getItemsList.value) ? giftStore.getItemsList.value : []
		const assignmentsArr = Array.isArray(assignmentStore.getItemsList.value)
			? assignmentStore.getItemsList.value
			: []

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
