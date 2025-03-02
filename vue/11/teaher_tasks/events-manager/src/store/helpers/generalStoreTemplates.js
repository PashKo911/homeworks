import CollectionManager from '../services/localStorageDB'
export const state = {
  itemsList: [],
  currentItem: null,
  currentListByIdsList: null,
  collectionName: null,
}

export const getters = {
  getItemsList: ({ itemsList }) => itemsList,
  getCurrentItem: ({ currentItem }) => currentItem,
  getCurrentListByIdsList: ({ currentListByIdsList }) => currentListByIdsList,
}

export const mutations = {
  setStoreItem(state, { propTitle, propValue }) {
    state[propTitle] = propValue
  },
}

export const actions = {
  loadItemsList({ commit, state }) {
    const items = CollectionManager.getItemsList(state.collectionName)
    commit('setStoreItem', {
      propTitle: 'itemsList',
      propValue: items,
    })
  },
  loadItemById({ commit, state }, itemId) {
    const item = CollectionManager.getItemById(state.collectionName, itemId)
    console.log('item')
    console.log(item)

    commit('setStoreItem', {
      propTitle: 'currentItem',
      propValue: item,
    })
    return item
  },
  addNewItem({ state }, itemData) {
    CollectionManager.addItem(state.collectionName, itemData)
  },
  updateItem({ state }, itemData) {
    CollectionManager.updateItem(state.collectionName, itemData)
  },
  deleteItem({ dispatch, state }, itemId) {
    //---видаляємо
    CollectionManager.removeItemById(state.collectionName, itemId)
    //--- заново завантажуємо список
    dispatch('loadItemsList')
  },
  loadItemsByIdsList({ commit, state }, idsList) {
    const itemsList = CollectionManager.getItemsByIdList(
      state.collectionName,
      idsList
    )

    commit('setStoreItem', {
      propTitle: 'currentListByIdsList',
      propValue: itemsList,
    })
  },
}
