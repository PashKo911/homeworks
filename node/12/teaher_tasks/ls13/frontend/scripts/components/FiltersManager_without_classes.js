class FiltersManager {
  constructor(filtersConfig, containerSelector, onFilterChange) {
    this.filtersConfig = filtersConfig
    this.filterData = {}
    this.container = document.querySelector(containerSelector)
    this.onFilterChange = onFilterChange

    this.render()
  }

  render() {
    this.filtersConfig.forEach((filter) => {
      const filterElement = document.createElement('div')
      filterElement.classList.add('filter')

      switch (filter.type) {
        case 'range':
          filterElement.innerHTML = this.renderRangeFilter(filter)
          break
        case 'dropdown':
          filterElement.innerHTML = this.renderDropdownFilter(filter)
          break
        case 'selectOne':
          filterElement.innerHTML = this.renderSelectOneFilter(filter)
          break
        case 'selectMany':
          filterElement.innerHTML = this.renderSelectManyFilter(filter)
          break
        case 'search':
          filterElement.innerHTML = this.renderSearchFilter(filter)
          break
        default:
          console.warn(`Невідомий тип фільтра: ${filter.type}`)
      }

      filterElement.addEventListener('change', (event) => {
        this.updateFilterData(event.target.name, event.target.value)
        this.onFilterChange()
      })

      this.container.append(filterElement)
    })
  }

  renderRangeFilter(filter) {
    const { min, max } = filter.options
    return `
            <label>${filter.title ?? filter.name}:</label>
            <input type="number" min="${min}" max="${max}" name="${
      filter.name
    }_min" placeholder="Від">
            <input type="number" min="${min}" max="${max}" name="${
      filter.name
    }_max" placeholder="До">
        `
  }

  renderDropdownFilter(filter) {
    const options = filter.options
      .map(
        (option) => `<option value="${option.value}">${option.title}</option>`
      )
      .join('')
    return `
            <label>${filter.title ?? filter.name}:</label>
            <select name="${filter.name}_value">
                ${options}
            </select>
        `
  }

  renderSelectOneFilter(filter) {
    const options = filter.options
      .map(
        (option) =>
          `<label><input type="radio" name="${filter.name}_value" value="${option.value}"> ${option.title}</label>`
      )
      .join('')
    return `
            <label>${filter.title ?? filter.name}:</label>
            ${options}
        `
  }

  renderSelectManyFilter(filter) {
    const options = filter.options
      .map(
        (option) =>
          `<label><input type="checkbox" name="${filter.name}_value:multiple" value="${option.value}"> ${option.title}</label>`
      )
      .join('')
    return `
            <label>${filter.title ?? filter.name}:</label>
            ${options}
        `
  }

  renderSearchFilter(filter) {
    return `
            <label>${filter.title ?? filter.name}:</label>
            <input type="text" name="${filter.name}_value">
        `
  }

  updateFilterData(fieldName, value) {
    const [field, operator] = fieldName.split('_')
    this.filterData[field] = this.filterData[field] || {}
    if (operator.endsWith(':multiple')) {
      this.filterData[field]['value'] = this.filterData[field]['value'] ?? []
      let valIndex = this.filterData[field]['value'].indexOf(value)
      if (valIndex > -1) this.filterData[field]['value'].splice(valIndex, 1)
      else this.filterData[field]['value'].push(value)
    } else {
      if (value !== '') this.filterData[field][operator] = value
      else delete this.filterData[field][operator]
    }
  }

  getQueryString() {
    const queryParameters = []

    for (const field in this.filterData) {
      if (this.filterData[field] !== undefined) {
        const { min, max } = this.filterData[field]

        if (min !== undefined || max !== undefined) {
          if (min !== undefined && min !== '') {
            queryParameters.push(`${field}=gte:${encodeURIComponent(min)}`)
          }
          if (max !== undefined && max !== '') {
            queryParameters.push(`${field}=lte:${encodeURIComponent(max)}`)
          }
        } else {
          if (Array.isArray(this.filterData[field].value))
            queryParameters.push(
              `${field}=${this.filterData[field].value.join(',')}`
            )
          else if (this.filterData[field].value)
            queryParameters.push(
              `${field}=${encodeURIComponent(this.filterData[field].value)}`
            )
        }
      }
    }

    return queryParameters.join('&')
  }

  setOnFilterChange(callback) {
    this.onFilterChange = callback
  }
}
