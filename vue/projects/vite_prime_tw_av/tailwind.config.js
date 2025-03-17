/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui'

export default {
	darkMode: ['selector', '[class*="p-dark"]'],
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	plugins: [PrimeUI],
	theme: {
		screens: {
			sm: '30em', //480
			md: '48em', //768
			lg: '62em', //992
			xl: '90em', //1440
		},
	},
}
