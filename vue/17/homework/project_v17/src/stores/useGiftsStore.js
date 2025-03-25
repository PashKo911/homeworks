import { defineStore } from 'pinia'
import { useCrudStore } from './useCrudStore'

export const useGiftsStore = defineStore('gifts', () => {
	return {
		...useCrudStore('gifts'),
	}
})
