import fs from 'fs/promises'

export async function saveNum(res, url, numbersFilePath) {
	const number = parseInt(url.split('/')[2])

	if (isNaN(number)) {
		sendResponse(res, 400, 'Not a number')
		return
	}

	try {
		await fs.appendFile(numbersFilePath, `${number},`)
		sendResponse(res, 200, 'Number Added')
	} catch (error) {
		console.log(error)
		sendResponse(res, 400, 'Error during file writing')
	}
}

export async function readFile(res, path) {
	try {
		await fileChecker(res, path)
		const data = await fs.readFile(path, 'utf-8')

		return data
	} catch (error) {
		console.log(error)
		sendResponse(res, 400, 'Error during file reading')
		return null
	}
}

export async function fileChecker(res, path) {
	try {
		await fs.access(path)
		return true
	} catch (error) {
		console.log(error)
		sendResponse(res, 400, 'File does not exist')
		return false
	}
}

export function getNumbersArr(data) {
	if (data === null) return
	return data
		.split(',')
		.filter((num) => !isNaN(num) && num !== '')
		.map(Number)
}

export async function getSumFromFile(res, path) {
	const data = await readFile(res, path)
	const numbersArr = getNumbersArr(data)
	const sum = getSum(numbersArr)
	sendResponse(res, 200, `Sum: ${sum}`)
}

export async function getMultFromFile(res, path) {
	const data = await readFile(res, path)
	const numbersArr = getNumbersArr(data)
	const mult = getMult(numbersArr)
	sendResponse(res, 200, `Mult: ${mult}`)
}

export async function removeFile(res, path) {
	try {
		await fs.unlink(path)
		sendResponse(res, 200, 'File removed')
	} catch (error) {
		console.log(error)
		sendResponse(res, 400, 'Error during file removing')
	}
}

export function getNumbersArrFromUrl(req, res) {
	const numbersStr = req.url.split('/')[2]

	if (!numbersStr) {
		sendResponse(res, 400, 'Numbers arr is empty')
		return null
	}

	const numbersArr = numbersStr
		.split('-')
		.filter((num) => !isNaN(num) && num !== '')
		.map(Number)

	return numbersArr
}

export function getSum(numbersArr) {
	if (!numbersArr || numbersArr.length === 0) {
		return
	}
	return numbersArr.reduce((acc, num) => acc + num, 0)
}
export function getSub(numbersArr) {
	if (!numbersArr || numbersArr.length === 0) {
		return
	}
	return numbersArr.reduce((acc, num) => acc - num)
}
export function getMult(numbersArr) {
	if (!numbersArr || numbersArr.length === 0) {
		return
	}
	return numbersArr.reduce((acc, num) => acc * num, 1)
}

export function sendResponse(res, errNumb, text) {
	if (!res.headersSent) {
		res.writeHead(errNumb, { 'Content-Type': 'text/plain' })
	}
	res.end(text)
}

export function processRequest(req, res, operationFunc, operationName) {
	const numbersArr = getNumbersArrFromUrl(req, res)
	if (!numbersArr) return
	const result = operationFunc(numbersArr)
	sendResponse(res, 200, `${operationName}: ${result}`)
}

export async function showHistory(res, historyFilePath) {
	const data = await readFile(res, historyFilePath)
	if (data === null) return
	const history = JSON.parse(data)

	let formattedText = 'History of Visits:\n\n'
	formattedText += 'Route         | Visits\n'
	formattedText += '------------------------\n'

	for (const [route, visits] of Object.entries(history)) {
		formattedText += `${route.padEnd(14)} | ${visits}\n`
	}

	sendResponse(res, 200, formattedText)
}
export async function updateHistory(req, res, historyFilePath) {
	try {
		const url = req.url
		const historyData = await readFile(res, historyFilePath)
		if (historyData === null) return
		const historyObj = JSON.parse(historyData)

		if (url in historyObj) {
			historyObj[url] += 1
		} else {
			historyObj[url] = 1
		}
		await fs.writeFile(historyFilePath, JSON.stringify(historyObj, null, 2))
		sendResponse(res, 200, 'History updated')
	} catch (error) {
		sendResponse(res, 400, 'Error during file writing')
		console.log(error)
	}
}
