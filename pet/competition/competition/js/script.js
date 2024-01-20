"use strict"

function animateCounter(element, attributeName) {
	const value = parseInt(element.textContent)
	const time = parseInt(element.getAttribute(attributeName)) || 1000

	let current = 0
	let start

	function updateCounter(timestamp) {
		// !start ? start = timestamp : null

		if (!start) start = timestamp

		const progress = timestamp - start
		const increment = value / time

		if (current < value) {
			current += increment * (progress / 1000)
			element.textContent = Math.floor(current)
			requestAnimationFrame(updateCounter)
		} else {
			element.textContent = value
		}
	}

	requestAnimationFrame(updateCounter)
}

function setWidth(element) {
	const width = element.offsetWidth
	element.style.minWidth = width + 4 + "px"

	return width
}

window.onload = () => {
	const counters = document.querySelectorAll("[data-counter]")

	if (counters.length) {
		counters.forEach(setWidth)
		counters.forEach((element) => animateCounter(element, "data-counter"))
	}
	// document.querySelectorAll("[data-counter]").forEach(animateCounter)
}
