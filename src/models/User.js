const mongoose = require('../database/connectDB');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    // title: { type: String, required: [true, 'Yêu cầu nhập tiêu đề'] },
    username: { type: String, required: [true, 'Yêu cầu nhập tên sản phẩm'], unique: [true, 'Tên đăng nhập bị trùng rồi !!!'] },
    password: { type: String, required: [true, 'Yêu cầu nhập mật khẩu'] }
})

// hash password before save 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})


const Article = mongoose.model('User', userSchema);

module.exports = Article;