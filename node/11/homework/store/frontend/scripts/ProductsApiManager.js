class ProductsApiManager {
	static async getProducts() {
		return RequestManager.fetchData('/products')
	}
	static async getProductToEdit(id) {
		return await RequestManager.fetchData(`/products/edit/${id}`)
	}
	static async addProduct(data, id) {
		return await RequestManager.doPostRequest(`/products/add/${id}`, data, './list.html')
	}

	static async deleteProduct(id) {
		return RequestManager.deleteRequest('/products/delete', id)
	}
}
