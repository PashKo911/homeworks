import mongoose from 'mongoose'
const { Schema } = mongoose

//------  Схема для товару в кошику ------
const cartProductSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId, // Поле для збереження посилання на товар
    ref: 'Product',
    required: true,
  },
  amount: {
    type: Number, // Поле для збереження кількості товару
    required: true,
    min: 1,
  },
})

//========  Схема для кошика  ========
const cartSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId, // Поле для збереження посилання на користувача
    ref: 'User',
    required: true,
  },
  productsList: [cartProductSchema], // Масив товарів у кошику
})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart
