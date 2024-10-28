export function getSeason(month = new Date().getMonth()) {
	const seasonIndex = Math.floor((month % 12) / 3)

	const seasons = ['Зима', 'Весна', 'Літо', 'Осінь']

	return seasons[seasonIndex]
}

export function getDay(day = new Date().getDay()) {
	const weekDays = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота']

	return weekDays[day]
}

export function getDaysTime(time = new Date().getHours()) {
	const timesOfDay = [
		{ start: 0, end: 4, name: 'Ніч' },
		{ start: 5, end: 12, name: 'Ранок' },
		{ start: 13, end: 18, name: 'Обід' },
		{ start: 19, end: 23, name: 'Вечір' },
	]

	return timesOfDay.find(({ start, end }) => time >= start && time <= end).name
}
