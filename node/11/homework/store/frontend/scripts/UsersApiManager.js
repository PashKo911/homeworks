class UsersApiManager {
	static async getUsers() {
		return RequestManager.fetchData('/users')
	}
	static async getUserToEdit(id) {
		return await RequestManager.fetchData(`/users/edit/${id}`)
	}
	static async addUser(data, id) {
		return await RequestManager.doPostRequest(`/users/add/${id}`, data, './list.html')
	}
	static async deleteUser(id) {
		return RequestManager.deleteRequest('/users/delete', id)
	}
}
