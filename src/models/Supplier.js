const mongoose = require('../database/connectDB');

const supplierSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Yêu cầu nhập tên '] },
    address: { type: String, required: [true, 'Yêu cầu nhập địa chỉ '] },
    phone: { type: String, required: [true, 'Yêu cầu nhập nội dung'] },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

// Virtual field: comments
supplierSchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'productId'
});

const Article = mongoose.model('Supplier', supplierSchema);

module.exports = Article;