export function setRating(el, attribute, childClass) {
	const ratingValue = parseFloat(el.getAttribute(attribute)) || 0

	const childEl = el.querySelector(childClass)

	if (ratingValue) {
		if (childEl) {
			childEl.style.width = `${ratingValue / 0.0498}%`
		}
	} else {
		el.style.opacity = 0.4
	}
}