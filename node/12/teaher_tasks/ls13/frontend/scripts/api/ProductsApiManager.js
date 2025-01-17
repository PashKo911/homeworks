class ProductsApiManagerClass extends BaseApiManager {
  async getFiltersData() {
    return RequestManager.fetchData(`${this.routeBase}/filters-data`)
  }
  async addToCart(id) {
    return RequestManager.postRequest(`${this.routeBase}/add/${id}`)
  }

  async getSellerProducts(id) {
    return RequestManager.fetchData(`${this.routeBase}/seller/${id}`)
  }
}

const ProductsApiManager = new ProductsApiManagerClass('/products')
