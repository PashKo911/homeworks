import { defineStore } from 'pinia'
import { useCrudStore } from './useCrudStore'

export const useFriendsStore = defineStore('friends', () => {
	return {
		...useCrudStore('friends'),
	}
})
