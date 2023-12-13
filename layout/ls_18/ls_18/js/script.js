"use strict"
function toggleClassOnElement(elClassName, addClassName) {
	const element = document.querySelector(elClassName)
	element?.classList.toggle(addClassName) || console.assert(false, "element not found")
}

document.addEventListener("DOMContentLoaded", function () {
	const iconMenu = document.querySelector(".icon-menu")
	const menuItem = document.querySelector(".menu__item--parent")


	iconMenu.addEventListener("click", function () {
		toggleClassOnElement(".icon-menu", "menu-open")
		toggleClassOnElement(".menu__body", "menu-open")
	})

	menuItem.addEventListener('click', function(){
		toggleClassOnElement(".sub-menu", ".sub-menu-open")
	})
})
