"use strict"

function animateCounter(element, attributeName) {
	const target = parseInt(element.textContent)
	let time = parseInt(element.getAttribute(attributeName))

	time = time || 1000

	let current = 0

	function updateCounter(timestamp) {
		// !start ? start = timestamp : null

		if (!start) start = timestamp

		const progress = timestamp - start
		const increment = target / time

		if (current < target) {
			current += increment * (progress / 1000)
			element.textContent = Math.floor(current)
			requestAnimationFrame(updateCounter)
		} else {
			element.textContent = target
		}
	}

	let start
	requestAnimationFrame(updateCounter)
}

function setWidth(element) {
	const width = element.offsetWidth
	element.style.minWidth = width + 4 + "px"
	console.log(width)
	return width
}

window.onload = () => {
	const counters = document.querySelectorAll("[data-counter]")

	if (counters) {
		counters.forEach(setWidth)
		counters.forEach((element) => animateCounter(element, "data-counter"))
	}
	// document.querySelectorAll("[data-counter]").forEach(animateCounter)
}
