import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import DbOperations from './helpers/DbOperations'

export const useCrudStore = (collectionTitle) => {
	// State
	const items = ref([])
	const currentItem = ref(null)
	const loading = ref(false)
	const error = ref(null)

	// Getters
	const isLoading = computed(() => loading.value)
	const hasError = computed(() => error.value)
	const getItemsList = computed(() => items.value)
	const getItemById = (itemId) => items.value.find((item) => item.id == itemId)
	const getCurrentItem = computed(() => currentItem.value)

	// DB
	const collectionDB = new DbOperations(collectionTitle)

	// Actions
	async function loadList(options) {
		error.value = null
		loading.value = true
		try {
			const list = await collectionDB.loadItemsList(options)
			items.value = list
		} catch (e) {
			error.value = e
		} finally {
			loading.value = false
		}
	}

	async function addItem(item) {
		error.value = null
		loading.value = true
		try {
			await collectionDB.addItem(item)
			await loadList()
		} catch (e) {
			error.value = e
		} finally {
			loading.value = false
		}
	}

	async function deleteItem(itemId) {
		error.value = null
		loading.value = true
		try {
			await collectionDB.deleteItem(itemId)
			await loadList()
		} catch (e) {
			error.value = e
			throw e
		} finally {
			loading.value = false
		}
	}

	async function updateItem({ itemId, data }) {
		error.value = null
		loading.value = true
		try {
			await collectionDB.updateItem(itemId, data)
			await loadList()
		} catch (e) {
			error.value = e
			throw e
		} finally {
			loading.value = false
		}
	}

	async function loadItemDataById(itemId) {
		error.value = null
		loading.value = true
		currentItem.value = null
		try {
			const data = await collectionDB.loadItemById(itemId)
			currentItem.value = data
		} catch (e) {
			error.value = e
		} finally {
			loading.value = false
		}
	}

	async function loadFilteredData({ filters, options }) {
		error.value = null
		loading.value = true
		try {
			const list = await collectionDB.loadFilteredData({ filters }, options)
			items.value = list
		} catch (e) {
			error.value = e
		} finally {
			loading.value = false
		}
	}

	return {
		// State
		items,
		currentItem,
		loading,
		error,
		// Getters
		isLoading,
		hasError,
		getItemsList,
		getItemById,
		getCurrentItem,
		// Actions
		loadList,
		addItem,
		deleteItem,
		updateItem,
		loadItemDataById,
		loadFilteredData,
	}
}
