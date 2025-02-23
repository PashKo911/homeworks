import { commonMutations } from '../helpers/commonMethods'
export default {
  namespaced: true,
  state: () => ({
    productsList: [
      {
        id: 1,
        name: 'Ноутбук ASUS VivoBook',
        brand: 'ASUS',
        price: 15000,
        sellerId: 1,
      },
      {
        id: 2,
        name: 'Смартфон Samsung Galaxy S21',
        brand: 'Samsung',
        price: 12000,
        sellerId: 2,
      },
      {
        id: 3,
        name: 'Планшет Apple iPad Pro',
        brand: 'Apple',
        price: 22000,
        sellerId: 3,
      },
      {
        id: 4,
        name: 'Монітор Dell UltraSharp',
        brand: 'Dell',
        price: 8000,
        sellerId: 4,
      },
      {
        id: 5,
        name: 'Навушники Bose QuietComfort 35',
        brand: 'Bose',
        price: 5000,
        sellerId: 5,
      },
      {
        id: 6,
        name: 'Клавіатура ASUS TUF',
        brand: 'ASUS',
        price: 1500,
        sellerId: 1,
      },
      {
        id: 7,
        name: 'Миша ASUS ROG Gladius',
        brand: 'ASUS',
        price: 2000,
        sellerId: 1,
      },
      {
        id: 8,
        name: 'Роутер TP-Link Archer',
        brand: 'TP-Link',
        price: 1200,
        sellerId: 3,
      },
      {
        id: 9,
        name: 'Мікрофон Blue Yeti',
        brand: 'Blue',
        price: 7000,
        sellerId: 4,
      },
      {
        id: 10,
        name: 'Принтер HP LaserJet',
        brand: 'HP',
        price: 3000,
        sellerId: 5,
      },
      {
        id: 11,
        name: 'Флешка Kingston DataTraveler',
        brand: 'Kingston',
        price: 500,
        sellerId: 1,
      },
      {
        id: 12,
        name: 'Зовнішній жорсткий диск WD My Passport',
        brand: 'Western Digital',
        price: 4000,
        sellerId: 2,
      },
      {
        id: 13,
        name: 'Проектор Epson PowerLite',
        brand: 'Epson',
        price: 10000,
        sellerId: 3,
      },
      {
        id: 14,
        name: 'Геймпад Xbox One Controller',
        brand: 'Microsoft',
        price: 2500,
        sellerId: 4,
      },
      {
        id: 15,
        name: 'Смарт-годинник Fitbit Charge 4',
        brand: 'Fitbit',
        price: 6000,
        sellerId: 5,
      },
      {
        id: 16,
        name: 'Веб-камера Logitech C920',
        brand: 'Logitech',
        price: 2500,
        sellerId: 1,
      },
      {
        id: 17,
        name: 'Бездротова зарядка Anker PowerWave',
        brand: 'Anker',
        price: 1500,
        sellerId: 2,
      },
      {
        id: 18,
        name: 'Графічний планшет Wacom Intuos',
        brand: 'Wacom',
        price: 9000,
        sellerId: 3,
      },
      {
        id: 19,
        name: 'Колонки JBL Flip 5',
        brand: 'JBL',
        price: 4500,
        sellerId: 4,
      },
      {
        id: 20,
        name: 'Мережевий фільтр APC SurgeArrest',
        brand: 'APC',
        price: 800,
        sellerId: 5,
      },
      {
        id: 21,
        name: 'Шолом віртуальної реальності Oculus Quest 2',
        brand: 'Oculus',
        price: 18000,
        sellerId: 1,
      },
      {
        id: 22,
        name: 'Кардридер Transcend USB 3.0',
        brand: 'Transcend',
        price: 700,
        sellerId: 2,
      },
      {
        id: 23,
        name: 'Лазерний принтер Brother HL-L2350DW',
        brand: 'Brother',
        price: 8000,
        sellerId: 3,
      },
      {
        id: 24,
        name: 'Бездротові навушники Sony WH-1000XM4',
        brand: 'Sony',
        price: 6000,
        sellerId: 4,
      },
      {
        id: 25,
        name: 'Розумний дім комплект Xiaomi Mi',
        brand: 'Xiaomi',
        price: 10000,
        sellerId: 5,
      },
      {
        id: 26,
        name: 'USB-адаптер Belkin USB-C',
        brand: 'Belkin',
        price: 900,
        sellerId: 1,
      },
      {
        id: 27,
        name: 'Цифровий фотоапарат Canon EOS M50',
        brand: 'Canon',
        price: 15000,
        sellerId: 2,
      },
      {
        id: 28,
        name: 'Смарт-лампа Philips Hue White',
        brand: 'Philips',
        price: 2000,
        sellerId: 3,
      },
      {
        id: 29,
        name: 'HDMI-кабель Monster Ultra High Speed',
        brand: 'Monster',
        price: 800,
        sellerId: 4,
      },
      {
        id: 30,
        name: 'Фітнес-браслет Garmin Vivosmart 4',
        brand: 'Garmin',
        price: 5000,
        sellerId: 5,
      },
    ],
  }),
  getters: {
    productsList: ({ productsList }) => productsList,
    populatedProductsList: (state, getters, rootState, rootGetters) => {
      const sellerList = rootGetters['sellers/sellersList']

      const sellersObject = {}
      for (const seller of sellerList) {
        sellersObject[seller.id] = seller
      }

      const populatedList = state.productsList.map((product) => ({
        ...product,
        seller: sellersObject[product.sellerId],
      }))

      return populatedList
    },
  },
  mutations: {
    ...commonMutations,
  },
  actions: {},
}
