import { commonMutations } from '../helpers/commonMethods'
export default {
  namespaced: true,
  state: () => ({
    sellersList: [
      { id: 1, name: 'Ivan Petrenko', rating: 4.5 },
      { id: 2, name: 'Olha Shevchenko', rating: 4.8 },
      { id: 3, name: 'Maksym Tkachenko', rating: 4.2 },
      { id: 4, name: 'Kateryna Bondarenko', rating: 4.7 },
      { id: 5, name: 'Andriy Kovalchuk', rating: 4.6 },
    ],
  }),
  getters: {
    sellersList: ({ sellersList }) => sellersList,
  },
  mutations: {
    ...commonMutations.setData,
  },
  actions: {},
}
