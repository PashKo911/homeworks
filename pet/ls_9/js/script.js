"use strict"

class TableCreator {
	constructor(rowsCount, columnsCount, containerSelector, minesCount) {
		this.rowsCount = rowsCount
		this.columnsCount = columnsCount
		this.containerSelector = containerSelector
		this.minesCount = minesCount
	}

	render() {
		if (this.rowsCount < 1 || this.columnsCount < 1) {
			throw new Error("Не коректні значення рядків або стовпців")
		}

		const tableBox = document.createElement("div")
		tableBox.className = "table__box"

		const table = document.createElement("table")
		tableBox.append(table)

		const mineCoordinates = [] // Массив с координатами мин

		while (mineCoordinates.length < this.minesCount) {
			const row = this.getRandomNumber(0, this.rowsCount - 1)
			const column = this.getRandomNumber(0, this.columnsCount - 1)
			const coordinate = `${row}-${column}`
			if (!mineCoordinates.includes(coordinate)) {
				mineCoordinates.push(coordinate)
			}
		}

		for (let i = 0; i < this.rowsCount; i++) {
			const row = document.createElement("tr")
			table.append(row)

			for (let j = 0; j < this.columnsCount; j++) {
				const column = document.createElement("td")
				const coordinate = `${i}-${j}`

				// column.setAttribute("id", `${i}__${j}`)

				if (mineCoordinates.includes(coordinate)) {
					column.setAttribute("mine", "1")
					column.innerText = "m"
				} else {
					column.setAttribute("mine", "0") // удалить если что

					const surroundingMines = this.countSurroundingMines(i, j, mineCoordinates)
					if (surroundingMines > 0) {
						column.innerText = surroundingMines
					}
				}
				row.append(column)
			}
		}

		if (this.containerSelector) {
			this.container = document.querySelector(this.containerSelector)
			this.container.append(tableBox)
		}

		return table
	}

	getRandomNumber(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1))
	}

	countSurroundingMines(row, column, mineCoordinates) {
		const offsets = [-1, 0, 1]
		let count = 0

		for (let i of offsets) {
			for (let j of offsets) {
				if (i === 0 && j === 0) continue
				const newRow = row + i
				const newColumn = column + j
				const coordinate = `${newRow}-${newColumn}`

				if (mineCoordinates.includes(coordinate)) {
					count++
				}
			}
		}

		return count
	}
}

class Sapper {
	constructor() {}

	findCellByIndex(row, cellIndex) {
		// Получаем все ячейки внутри строки
		let cells = row.getElementsByTagName("td")

		// Проверяем, что индекс находится в пределах диапазона ячеек
		if (cellIndex >= 0 && cellIndex < cells.length) {
			// Возвращаем ячейку по индексу
			return cells[cellIndex]
		} else {
			// Если индекс находится вне диапазона, возвращаем null или выполняем другие необходимые действия
			return null
		}
	}

	openCell(e) {
		const cell = e.target

		const hasMine = cell.getAttribute("mine")

		if (e.target.tagName === "TD") {
			if (hasMine === "1") {
				cell.style.backgroundColor = "red"
			} else {
				cell.style.backgroundColor = "green"
				let td = cell
				let tr = cell.parentNode

				let currentTr = tr // Начинаем с текущей строки

				while (currentTr !== null) {
					let tdIndex = td.cellIndex
					let currentTd = this.findCellByIndex(currentTr, tdIndex) // Начинаем с текущей ячейки в строке

					if (currentTd.getAttribute("mine") === "1") {
						break
					}

					while (currentTd !== null) {
						if (currentTd.getAttribute("mine") === "1") {
							break
						}
						currentTd.style.backgroundColor = "green"
						currentTd = currentTd.previousElementSibling // Переходим к предыдущей ячейке в строке
					}

					currentTr = currentTr.previousElementSibling // Переходим к предыдущей строке
				}
				// td = cell

				// while (td.nextElementSibling !== null) {
				// 	td = td.nextElementSibling

				// 	if (td.getAttribute("mine") === "1") break
				// 	td.style.backgroundColor = "green"
				// }
			}
		}
	}

	gameFieldCreator(rowsCount, columnsCount, containerSelector, minesCount) {
		const field = new TableCreator(rowsCount, columnsCount, containerSelector, minesCount)
		this.gameField = field.render()
		this.gameField.onclick = this.openCell.bind(this)
	}
}

window.onload = () => {
	let sapper = new Sapper()
	sapper.gameFieldCreator(9, 9, ".game__container", 10)
	console.log(sapper.gameField)
	// console.log(sapper.cell)
}
