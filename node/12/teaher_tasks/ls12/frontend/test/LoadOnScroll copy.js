class LoadOnScroll {
  constructor(containerSelector, baseRoute, itemsPerPage) {
    this.container = document.querySelector(containerSelector)
    this.baseRoute = baseRoute
    this.itemsPerPage = itemsPerPage
    this.page = 0
    this.loading = false

    this.init()
  }

  async loadItems() {
    if (this.loading) return
    this.loading = true

    try {
      //   const response = await fetch(
      //     `${this.baseRoute}?page=${this.page}&limit=${this.itemsPerPage}`
      //   )
      //   const items = await response.json()
      //--- Генеруємо тестові елементи
      const items = new Array(this.itemsPerPage)
        .fill({ name: 'Test item' })
        .map((item, ind) => ({
          name: `${ind + this.page * this.itemsPerPage} )  ${item.name}`,
        }))

      items.forEach((item) => {
        const div = document.createElement('div')
        div.textContent = item.name // Адаптуйте під ваші дані
        this.container.appendChild(div)
      })

      this.page++
    } catch (error) {
      console.error('Error loading items:', error)
    } finally {
      this.loading = false
    }
  }

  init() {
    this.loadItems()

    window.addEventListener('scroll', () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        this.loadItems()
      }
    })
  }
}
