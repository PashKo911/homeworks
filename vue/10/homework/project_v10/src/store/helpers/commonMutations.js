export const setData = (state, { propTitle, propValue }) => {
	state[propTitle] = propValue
}
export const editItem = (state, { data, currentProp }) => {
	const currentIndex = state[currentProp].findIndex((item) => item.id === data.id)
	state[currentProp][currentIndex] = data
}
export const addItem = (state, { data, currentProp }) => {
	state[currentProp].push({
		id: new Date().getTime(),
		...data,
	})
}
export const deleteItem = (state, { id, currentProp }) => {
	state[currentProp] = state[currentProp].filter((item) => item.id !== id)
}
