"use strict"

function toggleClassOnElement(elClassName, addClassName) {
	const element = document.querySelector(elClassName)
	if (element) {
		element.classList.toggle(addClassName)
	} else {
		console.assert(false, "element not found")
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const iconMenu = document.querySelector(".icon-menu")

	if (iconMenu) {
		iconMenu.addEventListener("click", function () {
			toggleClassOnElement(".icon-menu", "menu-open")
			toggleClassOnElement(".menu__body", "menu-open")
		})
	}
})
