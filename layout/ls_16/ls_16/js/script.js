"use strict"
function onLoad() {
	let color = localStorage.getItem("color")

	if (!color) {
		color = "#c8c5c589"
		localStorage.setItem("color", color)
	}

	document.getElementById("input-color").value = color
	document.body.style.backgroundColor = color
}

function onChangeStorage() {
	const userColor = localStorage.getItem("color")
	document.getElementById("input-color").value = userColor
	document.body.style.backgroundColor = userColor
}

function onChangeColor() {
	const userColor = document.getElementById("input-color").value

	document.body.style.background = userColor
	localStorage.setItem("color", userColor)

	window.dispatchEvent(
		new StorageEvent("storage", {
			key: "color",
			newValue: userColor,
		})
	)
}

window.onload = function () {
	onLoad()
	document.getElementById("input-color").oninput = onChangeColor
	window.addEventListener("storage", onChangeStorage)
}
