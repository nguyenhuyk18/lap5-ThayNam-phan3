const mongoose = require("mongoose");


const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
    dbName: 'LapNam'
}).then(() => console.log("✅ Kết nối MongoDB thành công!"))
    .catch(err => console.error("❌ Lỗi kết nối:", err));


module.exports = mongoose