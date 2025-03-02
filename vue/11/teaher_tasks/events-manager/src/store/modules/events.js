import {
  state as generalState,
  getters,
  mutations,
  actions,
} from '../helpers/generalStoreTemplates'

export default {
  namespaced: true,
  state: {
    ...JSON.parse(JSON.stringify(generalState)),
    currentItem: {
      title: null,
      studentsIdsList: [],
    },
    collectionName: 'events',
  },
  getters,
  mutations,
  actions,
}
