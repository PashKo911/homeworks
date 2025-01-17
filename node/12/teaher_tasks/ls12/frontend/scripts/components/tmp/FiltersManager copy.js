//----- Базовий клас -----
class BaseFilter {
  constructor(filterConfig, onChange) {
    this.filterConfig = filterConfig
    this.onChange = onChange
    this.currentValue = null
    this.inputs = {}
  }

  render() {
    throw new Error('Метод render() має бути реалізований у підкласах')
  }
  renderFilterElement(containerSelector) {
    const filterElement = this.render()
    filterElement.classList.add('filter')
    filterElement.addEventListener('change', (event) => {
      this.updateFilterData(event.target.name, event.target.value)
    })
    this.filterElement = filterElement

    if (containerSelector) {
      document.querySelector(containerSelector)?.append(filterElement)
    }

    return filterElement
  }

  updateFilterData(name, value) {
    this.currentValue = value
    this.onChange()
  }

  clear() {
    this.currentValue = null
    Object.values(this.inputs).forEach((input) => (input.value = ''))
  }

  getQueryString() {
    if (this.currentValue) {
      return `${this.filterConfig.name}=${this.currentValue}`
    }
    return ''
  }
}
//-------- Клас для фільтра діапазону: -----
class RangeFilter extends BaseFilter {
  render() {
    const { min, max, name, title } = this.filterConfig
    const container = document.createElement('div')
    container.innerHTML = `
      <label>${title ?? name}:</label>
      <input type="number" min="${min}" max="${max}" name="${name}_min" placeholder="Від">
      <input type="number" min="${min}" max="${max}" name="${name}_max" placeholder="До">
    `
    this.inputs.min = container.querySelector(`input[name="${name}_min"]`)
    this.inputs.max = container.querySelector(`input[name="${name}_max"]`)
    return container
  }

  updateFilterData(name, value) {
    const [field, operator] = name.split('_')
    if (!this.currentValue) {
      this.currentValue = { min: null, max: null }
    }
    this.currentValue[operator] = value
    this.onChange()
  }

  // clear() {
  //   this.currentValue = { min: null, max: null }
  //   this.inputs.min.value = ''
  //   this.inputs.max.value = ''
  // }

  getQueryString() {
    if (this.currentValue && (this.currentValue.min || this.currentValue.max)) {
      const queryParameters = []
      if (this.currentValue.min)
        queryParameters.push(
          `${this.filterConfig.name}=gte:${encodeURIComponent(
            this.currentValue.min
          )}`
        )
      if (this.currentValue.max)
        queryParameters.push(
          `${this.filterConfig.name}=lte:${encodeURIComponent(
            this.currentValue.max
          )}`
        )
      return queryParameters.join('&')
    }
    return ''
  }
}

//--------- Клас для випадаючого списку: ----------
class DropdownFilter extends BaseFilter {
  render() {
    const { options, name, title } = this.filterConfig
    const container = document.createElement('div')
    const optionsHtml = options
      .map(
        (option) => `<option value="${option.value}">${option.title}</option>`
      )
      .join('')
    container.innerHTML = `
      <label>${title ?? name}:</label>
      <select name="${name}_value">
        ${optionsHtml}
      </select>
    `
    this.inputs.select = container.querySelector(`select[name="${name}_value"]`)
    return container
  }

  // updateFilterData(name, value) {
  //   this.currentValue = value
  //   this.onChange()
  // }

  // clear() {
  //   this.currentValue = null
  //   this.inputs.select.value = ''
  // }
}

//--------- Клас для вибору одного елемента: ----------
class SelectOneFilter extends BaseFilter {
  render() {
    const { options, name, title } = this.filterConfig
    const container = document.createElement('div')
    const optionsHtml = options
      .map(
        (option) =>
          `<label><input type="radio" name="${name}_value" value="${option.value}"> ${option.title}</label>`
      )
      .join('')
    container.innerHTML = `
      <label>${title ?? name}:</label>
      ${optionsHtml}
    `
    this.inputs.radios = container.querySelectorAll(
      `input[name="${name}_value"]`
    )
    return container
  }

  // updateFilterData(name, value) {
  //   this.currentValue = value
  //   this.onChange()
  // }

  clear() {
    this.currentValue = null
    this.inputs.radios.forEach((radio) => (radio.checked = false))
  }
}

//--------- Клас для вибору багатьох елементів: --------
class SelectManyFilter extends BaseFilter {
  render() {
    const { options, name, title } = this.filterConfig
    const container = document.createElement('div')
    const optionsHtml = options
      .map(
        (option) =>
          `<label><input type="checkbox" name="${name}_value:multiple" value="${option.value}"> ${option.title}</label>`
      )
      .join('')
    container.innerHTML = `
      <label>${title ?? name}:</label>
      ${optionsHtml}
    `
    this.inputs.checkboxes = container.querySelectorAll(
      `input[name="${name}_value:multiple"]`
    )
    return container
  }

  updateFilterData(name, value) {
    if (!this.currentValue) {
      this.currentValue = []
    }
    const index = this.currentValue.indexOf(value)
    if (index > -1) {
      this.currentValue.splice(index, 1)
    } else {
      this.currentValue.push(value)
    }
    this.onChange()
  }

  clear() {
    this.currentValue = []
    this.inputs.checkboxes.forEach((checkbox) => (checkbox.checked = false))
  }

  getQueryString() {
    if (this.currentValue && this.currentValue.length > 0)
      return `${this.filterConfig.name}=${this.currentValue.join(',')}`

    return ''
  }
}

//------- Клас для пошукового фільтра: ----------
class SearchFilter extends BaseFilter {
  render() {
    const { name, title } = this.filterConfig
    const container = document.createElement('div')
    container.innerHTML = `
      <label>${title ?? name}:</label>
      <input type="text" name="${name}_value">
    `
    this.inputs.search = container.querySelector(`input[name="${name}_value"]`)
    return container
  }

  // updateFilterData(name, value) {
  //   this.currentValue = value
  //   this.onChange()
  // }

  // clear() {
  //   this.currentValue = ''
  //   this.inputs.search.value = ''
  // }
}

//================== Клас для менеджера фільтрів: ================
class FiltersManager {
  constructor(filtersConfig, containerSelector, onFilterChange) {
    this.filtersConfig = filtersConfig
    this.container = document.querySelector(containerSelector)
    this.onFilterChange = onFilterChange
    this.filters = []

    this.render()
  }

  render() {
    // Створюємо контейнер для фільтрів
    const filtersContainer = document.createElement('div')
    filtersContainer.classList.add('filters-container')

    // Створюємо кнопку "Очистити"
    const clearButton = document.createElement('button')
    clearButton.textContent = 'Очистити'
    clearButton.addEventListener('click', () => this.clearAllFilters())

    // Додаємо фільтри до контейнера
    this.filtersConfig.forEach((filterConfig) => {
      let filter
      switch (filterConfig.type) {
        case 'range':
          filter = new RangeFilter(filterConfig, this.onFilterChange)
          break
        case 'dropdown':
          filter = new DropdownFilter(filterConfig, this.onFilterChange)
          break
        case 'selectOne':
          filter = new SelectOneFilter(filterConfig, this.onFilterChange)
          break
        case 'selectMany':
          filter = new SelectManyFilter(filterConfig, this.onFilterChange)
          break
        case 'search':
          filter = new SearchFilter(filterConfig, this.onFilterChange)
          break
        default:
          console.warn(`Невідомий тип фільтра: ${filterConfig.type}`)
          return
      }

      this.container.append(filter.renderFilterElement())
      this.filters.push(filter)
    })
  }

  clearAllFilters() {
    this.filters.forEach((filter) => filter.clear())
    this.onFilterChange()
  }

  getQueryString() {
    const queryParams = this.filters
      .map((filter) => filter.getQueryString())
      .filter((param) => param)
      .join('&')
    return queryParams
  }
}
