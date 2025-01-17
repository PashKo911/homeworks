class ListDataManager {
  static createTableHeader(fields, createLinkFunction, deleteFunction) {
    const thead = document.createElement('thead')
    const headerRow = document.createElement('tr')

    for (let key in fields) {
      const th = document.createElement('th')
      if (typeof fields[key] === 'object') th.textContent = fields[key].title
      else th.textContent = fields[key]
      headerRow.append(th)
    }

    if (createLinkFunction) {
      const editTh = document.createElement('th')
      editTh.textContent = 'Редагувати'
      headerRow.append(editTh)
    }
    if (deleteFunction) {
      const deleteTh = document.createElement('th')
      deleteTh.textContent = 'Видалити'
      headerRow.append(deleteTh)
    }
    thead.append(headerRow)
    return thead
  }

  static createTableRow(item, fields, createLinkFunction, deleteFunction) {
    const row = document.createElement('tr')

    for (let key in fields) {
      const td = document.createElement('td')
      if (key === 'img' || key === 'image') {
        const img = document.createElement('img')
        img.src = item[key]
        // img.src = 'data:image;base64,' + item[key]
        img.alt = fields[key]
        img.style.width = '100px' // Задайте бажану ширину зображення
        td.append(img)
      } else if (typeof fields[key] === 'object' && fields[key].type === 'a') {
        td.innerHTML = `<a href = "${fields[key].linkGetter(item)}">${fields[
          key
        ].contentGetter(item)}</a>`
      } else {
        td.textContent = item[key]
      }
      row.append(td)
    }

    if (createLinkFunction) {
      const editTd = document.createElement('td')
      const editLink = document.createElement('a')
      editLink.href = createLinkFunction(item._id)
      editLink.textContent = 'Редагувати'
      editTd.append(editLink)
      row.append(editTd)
    }
    if (deleteFunction) {
      const deleteTd = document.createElement('td')
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Видалити'
      deleteButton.onclick = () => deleteFunction(item._id)
      deleteTd.append(deleteButton)
      row.append(deleteTd)
    }
    return row
  }

  static createTableFromList(data, fields, createLinkFunction, deleteFunction) {
    // Створення таблиці
    const table = document.createElement('table')
    table.border = '1'

    // Створення заголовку таблиці
    const thead = this.createTableHeader(
      fields,
      createLinkFunction,
      deleteFunction
    )
    table.append(thead)

    // Створення тіла таблиці
    const tbody = document.createElement('tbody')

    data.forEach((item) => {
      const row = this.createTableRow(
        item,
        fields,
        createLinkFunction,
        deleteFunction
      )
      tbody.append(row)
    })

    table.append(tbody)

    // Виведення таблиці на сторінку
    return table
  }
}
