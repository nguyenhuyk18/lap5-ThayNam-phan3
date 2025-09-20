// const action = require('../models/action');
// const pool = require('../database/client');
const axios = require('axios')

exports.listProduct = async (req, res) => {
    const rs = await axios.get('http://127.0.0.1:5204/api/v1/product');
    console.log()
    res.render('product/list', { listProduct: rs.data });
    return;
}


exports.addProduct = async (req, res) => {
    const rs = await axios.get('http://127.0.0.1:5204/api/v1/supplier');
    res.render('product/add', { categoryList: rs.data });
    return;
}


exports.editProduct = async (req, res) => {
    const rs = await axios.get('http://127.0.0.1:5204/api/v1/supplier');
    const rs1 = await axios.get(`http://127.0.0.1:5204/api/v1/product/${req.params.id}`);
    // console.log(rs1.data)
    res.render('product/edit', { categoryList: rs.data, productEdit: rs1.data });
    return;
}


// module.exports = {
//     listProduct
// }