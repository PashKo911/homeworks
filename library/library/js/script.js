// "use strict"

import { da } from "./dynamic_adapt.js"
// import { initSliders } from "./swaper.js"
// import { setRating } from "./rating.js"




window.onload = () => {

	const icon = document.querySelector(".icon-menu")
// 	const ratingElements = document.querySelectorAll("[data-rate-value]")
	
	// SLIDERS
// 	initSliders(".reviews__body", ".arrival__body", ".hero__body")

	// BURGER
	icon.addEventListener("click", function () {
		document.documentElement.classList.toggle("menu-open")
	})
	
	// RATING
// 	if (ratingElements.length) {
// 		ratingElements.forEach((el) => setRating(el, "data-rate-value", ".rate__active"))
// 	}
}
