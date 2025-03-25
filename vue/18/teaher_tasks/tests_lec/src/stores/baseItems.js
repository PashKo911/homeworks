import { ref } from 'vue'

export const useBaseItems = (entityTitle) => {
  const items = ref([
    {
      id: 111,
      title: 'Tea',
      price: 123,
    },
    {
      id: 222,
      title: 'Milk',
      price: 216,
    },
  ])

  const getItems = () => items
  const addItem = (newItemData) => {
    items.value.push({
      id: new Date().getDate(),
      ...newItemData,
    })
  }
  const getItemById = (productId) =>
    items.value.find((pr) => pr.id == productId)

  const updateItem = (itemToUpdate) => {
    const itemIndex = items.value.findIndex(
      (item) => item.id === itemToUpdate.id
    )
    items.value[itemIndex] = { ...itemToUpdate }
  }
  const deleteItem = (itemId) => {
    items.value = items.value.filter((item) => item.id !== itemId)
  }

  return {
    [entityTitle]: items,
    items,
    getItems,
    addItem,
    updateItem,
    deleteItem,
    getItemById,
  }
}
