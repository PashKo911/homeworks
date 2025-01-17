class PaginationManager {
  constructor({
    totalItemsNumber,
    itemsPerPage,
    currentPage,
    containerSelector,
    onClick,
  }) {
    this.totalItemsNumber = totalItemsNumber
    this.itemsPerPage = itemsPerPage
    this.currentPage = currentPage
    this.totalPages = Math.ceil(totalItemsNumber / itemsPerPage)
    this.containerSelector = containerSelector
    this.onClick = onClick

    this.render()
  }

  render() {
    const container = document.querySelector(this.containerSelector)
    container.innerHTML = ''

    const ul = document.createElement('ul')
    ul.classList.add('pagination')

    // Кнопка "Попередня"
    this.prevLi = document.createElement('li')
    const prevLink = document.createElement('a')
    prevLink.href = '#'
    prevLink.textContent = 'Попередня'
    this.prevLi.className = this.currentPage === 0 ? 'disabled' : ''
    this.prevLi.addEventListener('click', () => {
      if (this.currentPage > 0) {
        this.currentPage--
        this.onClick(this.currentPage)
        this.updatePaginationStyles()
      }
    })
    this.prevLi.append(prevLink)
    ul.append(this.prevLi)

    // Кнопки сторінок
    this.pageLinks = []
    for (let i = 1; i <= this.totalPages; i++) {
      const li = document.createElement('li')
      const link = document.createElement('a')
      link.href = '#'
      link.textContent = i
      if (i === this.currentPage + 1) {
        li.classList.add('active')
      }
      li.addEventListener('click', () => {
        this.currentPage = i - 1
        this.onClick(this.currentPage)
        this.updatePaginationStyles()
      })
      li.append(link)
      ul.append(li)
      this.pageLinks.push(li)
    }

    // Кнопка "Наступна"
    this.nextLi = document.createElement('li')
    const nextLink = document.createElement('a')
    nextLink.href = '#'
    nextLink.textContent = 'Наступна'
    this.nextLi.className =
      this.currentPage === this.totalPages - 1 ? 'disabled' : ''
    this.nextLi.addEventListener('click', () => {
      if (this.currentPage + 1 < this.totalPages) {
        this.currentPage++
        this.onClick(this.currentPage)
        this.updatePaginationStyles()
      }
    })
    this.nextLi.append(nextLink)
    ul.append(this.nextLi)

    container.append(ul)
  }

  updatePaginationStyles() {
    // Оновлення стилів для кнопок сторінок
    this.pageLinks.forEach((link, index) => {
      if (index === this.currentPage) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })

    // Оновлення стилів для кнопок "Попередня" та "Наступна"
    this.prevLi.className = this.currentPage === 0 ? 'disabled' : ''
    this.nextLi.className =
      this.currentPage === this.totalPages - 1 ? 'disabled' : ''
  }
}
