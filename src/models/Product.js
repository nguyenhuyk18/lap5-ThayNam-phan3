const mongoose = require('../database/connectDB');

const productSchema = new mongoose.Schema({
    // title: { type: String, required: [true, 'Yêu cầu nhập tiêu đề'] },
    name: { type: String, required: [true, 'Yêu cầu nhập tên sản phẩm'] },
    price: { type: String, required: [true, 'Yêu cầu nhập số tiền sản phẩm'] },
    quantity: { type: Number, required: [true, 'Yêu cầu nhập số lượng !!!'] },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    }
})



const Article = mongoose.model('Product', productSchema);

module.exports = Article;