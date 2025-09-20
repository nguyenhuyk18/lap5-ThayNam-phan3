const axios = require('axios');
// const 

exports.home = async (req, res) => {
    const rsCategory = await axios.get('http://127.0.0.1:5204/api/v1/supplier');
    const rsProduct = await axios.get('http://127.0.0.1:5204/api/v1/product')
    res.render('index', { category: rsCategory.data, products: rsProduct.data });
    return;
}
exports.login = async (req, res) => {
    // const rsCategory = await axios.get('http://127.0.0.1:5204/api/v1/supplier');
    // const rsProduct = await axios.get('http://127.0.0.1:5204/api/v1/product')
    res.render('login');
    return;
}
exports.register = async (req, res) => {

    res.render('register');
    return;
}

exports.forget = async (req, res) => {

    res.render('forget');
    return;
}