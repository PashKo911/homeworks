/* Задача 1. У консольний додаток передають через параметр пенсійний вік. Наприклад
node app.mjs –-pension=65
Потім питаємо у терміналі користувача скільки йому років (використати “readline”) і кажемо чи він є пенсіонером.
*/
import { argv } from 'process'
import readline from 'readline'

function consoleApp(appParameter = '--pension') {
	const queryString = argv.slice(2).join('&')
	const queryParams = new URLSearchParams(queryString)

	if (queryParams.has(appParameter)) {
		const pensionAge = queryParams.get(appParameter)
		const validationError = validatePensionAge(pensionAge, appParameter)

		if (validationError) {
			console.log(validationError)
			return
		}

		const readlineInterface = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		})

		readlineInterface.question('Please enter your age: ', (userAge) => {
			const userAgeValidationError = validatePensionAge(userAge, 'user age')
			if (userAgeValidationError) {
				console.log(userAgeValidationError)
			} else if (parseInt(userAge) >= pensionAge) {
				console.log('You have reached pension age.')
			} else {
				console.log('You have not yet reached pension age.')
			}

			readlineInterface.close()
		})
	} else {
		console.log(`Invalid or missing app parameter. Please provide a valid ${appParameter}=<age> parameter.`)
	}
}

function validatePensionAge(age, validateElement) {
	if (!age) {
		return `Please set a value for ${validateElement}`
	}
	if (isNaN(age)) {
		return `The value in ${validateElement} is not a number.`
	}
	if (parseInt(age) < 0) {
		return `The value in ${validateElement} must be a positive number.`
	}
	return null
}

consoleApp()
