class ListDataManager {
	static createTableHeader(fields, isEdit) {
		const thead = document.createElement('thead')
		const headerRow = document.createElement('tr')

		for (let key in fields) {
			const th = document.createElement('th')
			th.textContent = fields[key]
			headerRow.appendChild(th)
		}

		if (isEdit) {
			const editTh = document.createElement('th')
			editTh.textContent = 'Edit'
			headerRow.appendChild(editTh)

			const deleteTh = document.createElement('th')
			deleteTh.textContent = 'Delete'
			headerRow.appendChild(deleteTh)
		}

		thead.appendChild(headerRow)
		return thead
	}

	static createTableRow(item, fields, createLinkFunction = null, deleteFunction = null, isEdit = null) {
		const row = document.createElement('tr')

		for (let key in fields) {
			const td = document.createElement('td')
			if (key === 'img') {
				const img = document.createElement('img')
				img.src = item[key]
				img.alt = fields[key]
				img.style.width = '100px' // Задайте бажану ширину зображення
				td.appendChild(img)
			} else {
				// !Костиль
				if (this.isPlainObject(item[key])) {
					td.textContent = item[key]?.name || ''
				} else {
					td.textContent = item[key]
				}
			}
			row.appendChild(td)
		}

		if (isEdit) {
			const editTd = document.createElement('td')
			const editLink = document.createElement('a')
			editLink.href = createLinkFunction(item._id)
			editLink.textContent = 'Edit'
			editTd.appendChild(editLink)
			row.appendChild(editTd)

			const deleteTd = document.createElement('td')
			const deleteButton = document.createElement('button')
			deleteButton.textContent = 'Delete'
			deleteButton.onclick = () => deleteFunction(item._id)
			deleteTd.appendChild(deleteButton)
			row.appendChild(deleteTd)
		}

		return row
	}

	static createTableFromList(data, fields, createLinkFunction, deleteFunction, isEdit) {
		// Створення таблиці
		const table = document.createElement('table')

		// Створення заголовку таблиці
		const thead = this.createTableHeader(fields, isEdit)
		table.appendChild(thead)

		// Створення тіла таблиці
		const tbody = document.createElement('tbody')

		data.forEach((item) => {
			const row = this.createTableRow(item, fields, createLinkFunction, deleteFunction, isEdit)
			tbody.appendChild(row)
		})

		table.appendChild(tbody)

		// Виведення таблиці на сторінку
		return table
	}

	static isPlainObject(value) {
		return Object.prototype.toString.call(value) === '[object Object]'
	}
}
