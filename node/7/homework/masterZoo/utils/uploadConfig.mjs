import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/products')
	},
	filename: (req, file, cb) => {
		cb(null, 'product-' + uuidv4() + path.extname(file.originalname))
	},
})

const upload = multer({ storage })

export default upload