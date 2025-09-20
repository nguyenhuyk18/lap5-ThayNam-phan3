const express = require('express');
const router = express.Router();

const SupplierController = require('../controllers/SupplierController');

const { listSuppliers, addSupplier, editSupplier } = require('../services/SupplierService');

const checkLogin = require('../middlewares/checkLogin')
// router.get('/supplier/edit.html')
// router.get('/supplier/add.html')



router.get('/api/v1/supplier', SupplierController.getAll);
router.get('/api/v1/supplier/:id', SupplierController.findSupplier);
router.post('/api/v1/supplier', checkLogin, SupplierController.createSupplier);
router.put('/api/v1/supplier/:id', checkLogin, SupplierController.updateSupplier);
router.delete('/api/v1/supplier/:id', checkLogin, SupplierController.deleteSupplier);


router.get('/supplier', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, checkLogin, listSuppliers)
router.get('/supplier/add.html', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, checkLogin, addSupplier);
router.get('/supplier/edit/:id', (req, res, next) => {
    res.locals.user = req.session.user || null;
    // console.log(req.session.user, ' , ', req.originalUrl)
    next();
}, checkLogin, editSupplier);
// router.get('/supplier/add.html', addSupplier);

module.exports = router;