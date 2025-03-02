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
    collectionName: 'students',
  },
  getters,
  mutations,
  actions,
}
