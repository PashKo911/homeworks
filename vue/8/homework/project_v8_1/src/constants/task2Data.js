export const filterData = {
	years: {
		from: 1910,
		to: new Date().getFullYear(),
	},
	transportTypes: [
		{ id: 1, name: 'Легкові' },
		{ id: 2, name: 'Вантажні' },
		{ id: 3, name: 'Автобуси' },
	],
	bodyTypes: [
		{ id: 1, name: 'Седан' },
		{ id: 2, name: 'Позашляховик' },
		{ id: 3, name: 'Мінівен' },
		{ id: 4, name: 'Мікровен' },
		{ id: 5, name: 'Хетчбек' },
	],
	brands: [
		{
			id: 1,
			name: 'Toyota',
			models: [
				{ id: 1, name: 'Corolla' },
				{ id: 2, name: 'Camry' },
				{ id: 3, name: 'RAV4' },
				{ id: 4, name: 'Highlander' },
			],
		},
		{
			id: 2,
			name: 'BMW',
			models: [
				{ id: 5, name: 'X5' },
				{ id: 6, name: '3 Series' },
				{ id: 7, name: '5 Series' },
				{ id: 8, name: 'X3' },
			],
		},
		{
			id: 3,
			name: 'Mercedes',
			models: [
				{ id: 9, name: 'C-Class' },
				{ id: 10, name: 'E-Class' },
				{ id: 11, name: 'GLA' },
				{ id: 12, name: 'GLC' },
			],
		},
		{
			id: 4,
			name: 'Honda',
			models: [
				{ id: 13, name: 'Civic' },
				{ id: 14, name: 'Accord' },
				{ id: 15, name: 'CR-V' },
			],
		},
		{
			id: 5,
			name: 'Volkswagen',
			models: [
				{ id: 16, name: 'Passat' },
				{ id: 17, name: 'Tiguan' },
				{ id: 18, name: 'Golf' },
			],
		},
		{
			id: 6,
			name: 'Ford',
			models: [
				{ id: 19, name: 'Fiesta' },
				{ id: 20, name: 'Focus' },
				{ id: 21, name: 'Mustang' },
				{ id: 22, name: 'Explorer' },
			],
		},
		{
			id: 7,
			name: 'Chevrolet',
			models: [
				{ id: 23, name: 'Cruze' },
				{ id: 24, name: 'Malibu' },
				{ id: 25, name: 'Impala' },
				{ id: 26, name: 'Tahoe' },
			],
		},
		{
			id: 8,
			name: 'Nissan',
			models: [
				{ id: 27, name: 'Sentra' },
				{ id: 28, name: 'Altima' },
				{ id: 29, name: 'Maxima' },
				{ id: 30, name: 'Rogue' },
			],
		},
		{
			id: 9,
			name: 'Audi',
			models: [
				{ id: 31, name: 'A3' },
				{ id: 32, name: 'A4' },
				{ id: 33, name: 'Q5' },
				{ id: 34, name: 'Q7' },
			],
		},
		{
			id: 10,
			name: 'Kia',
			models: [
				{ id: 35, name: 'Rio' },
				{ id: 36, name: 'Optima' },
				{ id: 37, name: 'Sorento' },
				{ id: 38, name: 'Sportage' },
			],
		},
		{
			id: 11,
			name: 'Hyundai',
			models: [
				{ id: 39, name: 'Elantra' },
				{ id: 40, name: 'Sonata' },
				{ id: 41, name: 'Tucson' },
				{ id: 42, name: 'Santa Fe' },
			],
		},
		{
			id: 12,
			name: 'Subaru',
			models: [
				{ id: 43, name: 'Impreza' },
				{ id: 44, name: 'Forester' },
				{ id: 45, name: 'Outback' },
				{ id: 46, name: 'Legacy' },
			],
		},
		{
			id: 13,
			name: 'Mazda',
			models: [
				{ id: 47, name: 'Mazda3' },
				{ id: 48, name: 'Mazda6' },
				{ id: 49, name: 'CX-5' },
				{ id: 50, name: 'CX-9' },
			],
		},
		{
			id: 14,
			name: 'Dodge',
			models: [
				{ id: 51, name: 'Charger' },
				{ id: 52, name: 'Challenger' },
				{ id: 53, name: 'Durango' },
			],
		},
		{
			id: 15,
			name: 'Jeep',
			models: [
				{ id: 54, name: 'Wrangler' },
				{ id: 55, name: 'Grand Cherokee' },
				{ id: 56, name: 'Cherokee' },
			],
		},
		{
			id: 16,
			name: 'Lexus',
			models: [
				{ id: 57, name: 'IS' },
				{ id: 58, name: 'ES' },
				{ id: 59, name: 'RX' },
				{ id: 60, name: 'LX' },
			],
		},
		{
			id: 17,
			name: 'Cadillac',
			models: [
				{ id: 61, name: 'CTS' },
				{ id: 62, name: 'Escalade' },
				{ id: 63, name: 'XT5' },
			],
		},
		{
			id: 18,
			name: 'Buick',
			models: [
				{ id: 64, name: 'Encore' },
				{ id: 65, name: 'Enclave' },
				{ id: 66, name: 'Regal' },
			],
		},
		{
			id: 19,
			name: 'Infiniti',
			models: [
				{ id: 67, name: 'Q50' },
				{ id: 68, name: 'Q60' },
				{ id: 69, name: 'QX50' },
			],
		},
		{
			id: 20,
			name: 'Mitsubishi',
			models: [
				{ id: 70, name: 'Lancer' },
				{ id: 71, name: 'Outlander' },
				{ id: 72, name: 'Eclipse Cross' },
			],
		},
	],
}

export const carsData = [
	{
		id: 1,
		transportType: 1, // Легкові
		bodyType: 1, // Седан
		brand: 1, // Toyota
		model: 1, // Corolla
		year: 2018,
		price: 18000,
		mileage: 50000,
		location: 'Киев',
		fuel: 'Бензин',
		transmission: 'Механика',
		vin: 'JTDBR32E830912345',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/toyota_corolla__583699921f.webp',
	},
	{
		id: 2,
		transportType: 2, // Вантажні
		bodyType: 4, // Мікровен
		brand: 2, // BMW
		model: 6, // 3 Series
		year: 2020,
		price: 34000,
		mileage: 20000,
		location: 'Одесса',
		fuel: 'Дизель',
		transmission: 'Автомат',
		vin: 'WBA3A5G59ENS43210',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/bmw_3-series__585476236f.webp',
	},
	{
		id: 3,
		transportType: 1, // Легкові
		bodyType: 5, // Хетчбек
		brand: 3, // Mercedes
		model: 9, // C-Class
		year: 2019,
		price: 28000,
		mileage: 15000,
		location: 'Львов',
		fuel: 'Бензин',
		transmission: 'Автомат',
		vin: 'WDDGF4HB1DF762345',
		imgSrc: 'https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_c-class__586001724f.webp',
	},
	{
		id: 4,
		transportType: 3, // Автобуси
		bodyType: 3, // Мінівен
		brand: 4, // Honda
		model: 15, // CR-V
		year: 2017,
		price: 22000,
		mileage: 60000,
		location: 'Харьков',
		fuel: 'Гибрид',
		transmission: 'Автомат',
		vin: 'JHLRM4H73CC012345',
		imgSrc: 'https://cdn3.riastatic.com/photosnew/auto/photo/honda_cr-v__585429958f.webp',
	},
	{
		id: 5,
		transportType: 1, // Легкові
		bodyType: 2, // Позашляховик / Кросовер
		brand: 5, // Volkswagen
		model: 17, // Tiguan
		year: 2021,
		price: 35000,
		mileage: 10000,
		location: 'Днепр',
		fuel: 'Дизель',
		transmission: 'Механика',
		vin: 'WVGAV7AX7CW024680',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_tiguan__581327901f.webp',
	},
	{
		id: 6,
		transportType: 2, // Вантажні
		bodyType: 3, // Мінівен
		brand: 1, // Toyota
		model: 4, // Highlander
		year: 2016,
		price: 26000,
		mileage: 70000,
		location: 'Винница',
		fuel: 'Газ',
		transmission: 'Автомат',
		vin: '5TDBK3EH8AS023451',
		imgSrc: 'https://cdn3.riastatic.com/photosnew/auto/photo/toyota_highlander__543008358f.webp',
	},
	{
		id: 7,
		transportType: 3, // Автобуси
		bodyType: 2, // Позашляховик / Кросовер
		brand: 2, // BMW
		model: 5, // X5
		year: 2019,
		price: 55000,
		mileage: 35000,
		location: 'Житомир',
		fuel: 'Бензин',
		transmission: 'Автомат',
		vin: 'WBAKS6C58ED237820',
		imgSrc: 'https://cdn4.riastatic.com/photosnew/auto/photo/bmw_x5__578104199f.webp',
	},
	{
		id: 8,
		transportType: 1, // Легкові
		bodyType: 1, // Седан
		brand: 3, // Mercedes
		model: 10, // E-Class
		year: 2022,
		price: 60000,
		mileage: 5000,
		location: 'Черкассы',
		fuel: 'Дизель',
		transmission: 'Автомат',
		vin: 'WDDZF4KB7JA098765',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__582653196f.webp',
	},
	{
		id: 9,
		transportType: 1, // Легкові
		bodyType: 5, // Хетчбек
		brand: 4, // Honda
		model: 13, // Civic
		year: 2015,
		price: 15000,
		mileage: 90000,
		location: 'Полтава',
		fuel: 'Газ',
		transmission: 'Механика',
		vin: '2HGES16575H657890',
		imgSrc: 'https://cdn3.riastatic.com/photosnew/auto/photo/honda_civic__573082233f.webp',
	},
	{
		id: 10,
		transportType: 2, // Вантажні
		bodyType: 4, // Мікровен
		brand: 5, // Volkswagen
		model: 16, // Passat
		year: 2020,
		price: 30000,
		mileage: 30000,
		location: 'Кропивницкий',
		fuel: 'Дизель',
		transmission: 'Автомат',
		vin: 'WVWRW63B93E086702',
		imgSrc: 'https://cdn4.riastatic.com/photosnew/auto/photo/volkswagen_passat__576876419f.webp',
	},
	{
		id: 11,
		transportType: 3, // Автобуси
		bodyType: 1, // Седан
		brand: 1, // Toyota
		model: 2, // Camry
		year: 2023,
		price: 40000,
		mileage: 5000,
		location: 'Чернигов',
		fuel: 'Гибрид',
		transmission: 'Автомат',
		vin: '4T1BK3DB9FU128765',
		imgSrc: 'https://cdn2.riastatic.com/photosnew/auto/photo/toyota_camry__585480107f.webp',
	},
	{
		id: 12,
		transportType: 1, // Легкові
		bodyType: 2, // Позашляховик / Кросовер
		brand: 2, // BMW
		model: 8, // X3
		year: 2018,
		price: 45000,
		mileage: 40000,
		location: 'Тернополь',
		fuel: 'Бензин',
		transmission: 'Автомат',
		vin: 'WBAPG73529A566789',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/bmw_3-series__585476236f.webp',
	},
	{
		id: 13,
		transportType: 2, // Вантажні
		bodyType: 5, // Хетчбек
		brand: 3, // Mercedes
		model: 12, // GLC
		year: 2020,
		price: 70000,
		mileage: 20000,
		location: 'Ужгород',
		fuel: 'Дизель',
		transmission: 'Автомат',
		vin: 'WDD2539461F122345',
		imgSrc: 'https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_glc-class__562818008f.webp',
	},
	{
		id: 14,
		transportType: 3, // Автобуси
		bodyType: 4, // Мікровен
		brand: 4, // Honda
		model: 14, // Accord
		year: 2017,
		price: 25000,
		mileage: 60000,
		location: 'Ровно',
		fuel: 'Бензин',
		transmission: 'Механика',
		vin: '1HGCM66537A098765',
		imgSrc: 'https://cdn4.riastatic.com/photosnew/auto/photo/honda_accord__446950074f.webp',
	},
	{
		id: 15,
		transportType: 1, // Легкові
		bodyType: 1, // Седан
		brand: 5, // Volkswagen
		model: 18, // Golf
		year: 2022,
		price: 32000,
		mileage: 10000,
		location: 'Ивано-Франковск',
		fuel: 'Газ',
		transmission: 'Автомат',
		vin: '3VW5T7AU6FM087654',
		imgSrc: 'https://cdn2.riastatic.com/photosnew/auto/photo/volkswagen_golf__567249647f.webp',
	},
	{
		id: 16,
		transportType: 2, // Вантажні
		bodyType: 5, // Хетчбек
		brand: 4, // Honda
		model: 19, // Fit
		year: 2016,
		price: 14000,
		mileage: 75000,
		location: 'Луцк',
		fuel: 'Бензин',
		transmission: 'Механика',
		vin: 'JHMGD37589S234567',
		imgSrc: 'https://cdn3.riastatic.com/photosnew/auto/photo/honda_fit__533674243f.webp',
	},
	{
		id: 17,
		transportType: 3, // Автобуси
		bodyType: 2, // Позашляховик / Кросовер
		brand: 3, // Mercedes
		model: 11, // G-Class
		year: 2021,
		price: 120000,
		mileage: 15000,
		location: 'Черновцы',
		fuel: 'Дизель',
		transmission: 'Автомат',
		vin: 'WDB4632781X345678',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/mercedes-benz_g-class__585366101f.webp',
	},
	{
		id: 18,
		transportType: 1, // Легкові
		bodyType: 3, // Мінівен
		brand: 2, // BMW
		model: 7, // 7 Series
		year: 2015,
		price: 50000,
		mileage: 85000,
		location: 'Сумы',
		fuel: 'Бензин',
		transmission: 'Автомат',
		vin: 'WBAYB6C58ED457890',
		imgSrc: 'https://cdn2.riastatic.com/photosnew/auto/photo/bmw_7-series__572131102bx.webp',
	},
	{
		id: 19,
		transportType: 2, // Вантажні
		bodyType: 1, // Седан
		brand: 5, // Volkswagen
		model: 20, // Jetta
		year: 2019,
		price: 22000,
		mileage: 30000,
		location: 'Запорожье',
		fuel: 'Газ',
		transmission: 'Механика',
		vin: '3VW2B7AJ7KM123456',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_jetta__548989681bx.webp',
	},
	{
		id: 20,
		transportType: 1, // Легкові
		bodyType: 2, // Позашляховик / Кросовер
		brand: 1, // Toyota
		model: 3, // RAV4
		year: 2020,
		price: 36000,
		mileage: 25000,
		location: 'Николаев',
		fuel: 'Гибрид',
		transmission: 'Автомат',
		vin: 'JTMBF4DV6FD098765',
		imgSrc: 'https://cdn1.riastatic.com/photosnew/auto/photo/toyota_rav4__579703981bx.webp',
	},
]
