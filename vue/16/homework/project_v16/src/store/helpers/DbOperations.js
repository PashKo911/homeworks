import firebaseDB from '@/firebase-config'
import {
	doc,
	collection,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	updateDoc,
	query,
	where,
	startAfter,
	limit,
	orderBy,
} from 'firebase/firestore/lite'

class DbOperations {
	constructor(collectionTitle) {
		this.dbCollection = collection(firebaseDB, `/${collectionTitle}`)
	}

	getItemFromSnap(docSnap) {
		return {
			id: docSnap.id,
			...docSnap.data(),
		}
	}

	getListFromSnapshot(snapshot) {
		const list = []
		snapshot.docs.forEach((doc) => {
			list.push(this.getItemFromSnap(doc))
		})
		return list
	}
	getQueryOptions(options, ...filters) {
		const queryOpt = []
		if (filters.length) {
			queryOpt.push(...filters)
		}
		if (options?.orderBy) {
			queryOpt.push(orderBy(options.orderBy, options.orderType ?? 'asc'))
		}
		if (options?.page) {
			const limitNum = options.limit ?? 5
			queryOpt.push(startAfter(options.page * limitNum))
			queryOpt.push(limit(limitNum))
		} else if (options?.limit) {
			queryOpt.push(limit(options.limit))
		}
		return queryOpt
	}
	loadItemsList(options) {
		const queryOpt = this.getQueryOptions(options)

		return new Promise((resolve, reject) => {
			getDocs(query(this.dbCollection, ...queryOpt))
				.then((querySnapshot) => {
					resolve(this.getListFromSnapshot(querySnapshot))
				})
				.catch((error) => {
					reject(error)
				})
		})
	}
	//--------------
	loadItemById(id) {
		return new Promise((resolve, reject) => {
			getDoc(doc(this.dbCollection, id))
				.then((querySnapshot) => {
					if (querySnapshot.exists()) {
						resolve(this.getItemFromSnap(querySnapshot))
					} else throw new Error('Items not exists')
				})
				.catch((error) => {
					reject(error)
				})
		})
	}

	addItem(item) {
		return new Promise((resolve, reject) => {
			addDoc(this.dbCollection, item)
				.then(() => {
					resolve(true)
				})
				.catch((error) => {
					reject(error)
					throw error
				})
		})
	}

	deleteItem(id) {
		return new Promise((resolve, reject) => {
			deleteDoc(doc(this.dbCollection, id))
				.then(() => {
					resolve(true)
				})
				.catch((error) => {
					reject(error)
					throw error
				})
		})
	}

	updateItem(itemId, data) {
		return new Promise((resolve, reject) => {
			const oldDocRef = doc(this.dbCollection, itemId)
			updateDoc(oldDocRef, data)
				.then(() => {
					resolve(true)
				})
				.catch((error) => {
					reject(error)
				})
		})
	}
	loadFilteredData({ filters }, options) {
		const queryOpt = this.getQueryOptions(options, ...filters)
		const q = query(this.dbCollection, ...queryOpt)
		return getDocs(q)
			.then((querySnapshot) => this.getListFromSnapshot(querySnapshot))
			.catch((error) => Promise.reject(error))
	}
}

export default DbOperations
