const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');
const { listProduct, addProduct, editProduct } = require('../services/ProductService');
const checkLogin = require('../middlewares/checkLogin')




router.get('/api/v1/product', ProductController.getAll);
router.get('/api/v1/product/:id', ProductController.findProduct);
router.post('/api/v1/product', checkLogin, ProductController.createProduct);
router.put('/api/v1/product/:id', checkLogin, ProductController.updateProduct);
router.delete('/api/v1/product/:id', checkLogin, ProductController.deleteProduct);
router.get('/api/v1/product/supplier/:supplier_id', ProductController.productBySupplier)





router.get('/product', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, checkLogin, listProduct);
router.get('/product/add.html', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, checkLogin, addProduct);
router.get('/product/edit/:id', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, checkLogin, editProduct);






module.exports = router;