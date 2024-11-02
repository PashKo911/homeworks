class RequestManager {
	static async postRequest(route) {
		try {
			const response = await fetch(route, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`)
			}
			const data = await response.json()
			return data
		} catch (error) {
			console.error('Error in postRequest:', error)
			throw error
		}
	}

	static async deleteRequest(route, body) {
		const response = await fetch(route, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`)
		}

		window.location.href = '/products/productsList'
	}

	static handleFileSelect(uploadAreaSelector, imgSelector, fileInputSelector) {
		const uploadArea = document.querySelector(uploadAreaSelector)
		const fileInput = document.querySelector(fileInputSelector)
		const previewImage = document.querySelector(imgSelector)

		uploadArea.addEventListener('click', () => {
			fileInput.click()
		})

		fileInput.addEventListener('change', (event) => {
			const file = event.target.files[0]
			if (file) {
				fileInput.files = event.target.files
				uploadArea.style.borderColor = '#fff'
				this.previewFile(file, previewImage, uploadArea)
			}
		})

		uploadArea.addEventListener('dragover', (event) => {
			event.preventDefault()
			uploadArea.style.borderColor = '#fff'
		})

		uploadArea.addEventListener('dragleave', () => {
			uploadArea.style.borderColor = '#000'
		})

		uploadArea.addEventListener('drop', (event) => {
			event.preventDefault()
			uploadArea.style.borderColor = '#fff'
			const file = event.dataTransfer.files[0]
			if (file) {
				fileInput.files = event.dataTransfer.files
				this.previewFile(file, previewImage, uploadArea)
			}
		})
	}

	static previewFile(file, previewImage, uploadArea) {
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader()
			reader.onload = (e) => {
				previewImage.src = e.target.result
				previewImage.style.display = 'block'
				uploadArea.querySelector('span').style.display = 'none'
			}
			reader.readAsDataURL(file)
		} else {
			console.warn('Selected file is not an image.')
		}
	}
}
