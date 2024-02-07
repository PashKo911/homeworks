// "use strict"

import { counter } from "./counter.js"

// Ну типу універсальна функція для пошуку елементів, їх перевірки, запуску методу класу, ще буде тестуватись і дописуватись

function checkInit(identifier, className, methodName, parentAtrName) {
	if (!identifier) {
		throw new Error("identifier is not defined")
	}

	let elements
	if (identifier.includes(".")) {
		elements = document.querySelectorAll(identifier)
	} else {
		elements = document.querySelectorAll(`[${identifier}]`)

		if (elements.length && className && methodName) {
			elements.forEach((element) => {
				className[methodName](element, identifier, parentAtrName)
			})
		}
	}

	return elements && elements.length ? elements : null
}

window.onload = () => {

	// Ініціалізація анімованих лічильників
	// 1) Звичайний спосіб
	// const counters = document.querySelectorAll("[data-counter]")

	// if(counters.length){
	// 	counters.forEach(element => {
	// 		counter.observe(element);
	// 	});
	// }

	// 2) З використанням функції checkInit
	checkInit("data-counter", counter, "observe")
}
