const { Types } = require('mongoose');
const productModels = require('../models/Product');

class ProductController {
    static createProduct = async (req, res, next) => {
        const data = req.body;
        const { name, price, quantity, supplierId } = data
        try {
            if (await productModels.insertOne({ name: name, price: price, quantity: quantity, supplierId: supplierId })) {
                res.status(201).json({ message: 'Thêm sản phẩm thành công !!!' });
                return;
            }
        } catch (error) {
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }

    // static searchProductByName = async ()

    static getAll = async (req, res) => {
        const name = req.query.name || '';
        let rs = await productModels.find();
        if (name) {
            rs = await productModels.find({ name: { $regex: name } });
        }

        res.status(200).json(rs);
        return
    }

    static findProduct = async (req, res, next) => {
        const id = req.params.id;
        // console.log(id)
        try {
            const rs = await productModels.findOne({ _id: new Types.ObjectId(id) })
            if (rs) {
                res.status(201).json(rs);
                return;
            } else {
                const err = new Error('Không tìm thấy');
                err.status = 404;
                next(err);
                return;
            }

        } catch (error) {
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }

    static deleteProduct = async (req, res) => {
        const id = req.params.id;
        // const { name, price, quantity, supplierId } = data
        try {
            if (await productModels.deleteOne({ _id: new Types.ObjectId(id) })) {
                res.status(201).json({ message: 'Xóa sản phẩm thành công !!!' });
                return;
            }
        } catch (error) {
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }

    static productBySupplier = async (req, res, next) => {
        const idSupplier = req.params.supplier_id;

        try {
            const rs = await productModels.find({ supplierId: new Types.ObjectId(idSupplier) });
            if (rs) {
                res.status(201).json(rs);
                return;
            } else {
                const err = new Error('Không tìm thấy');
                err.status = 404;
                next(err);
                return;
            }

        } catch (error) {
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }

    static updateProduct = async (req, res) => {
        const id = req.params.id;
        console.log(id)
        const data = req.body;
        const { name, price, quantity, supplierId } = data
        try {
            if (await productModels.updateOne({ _id: new Types.ObjectId(id) }, { name: name, price: price, quantity: quantity, supplierId: supplierId })) {
                res.status(201).json({ message: 'Sửa sản phẩm thành công !!!' });
                return;
            }
        } catch (error) {
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }

    // static findProductByName = async (req, res) => {
    //     const name 
    // }
}

module.exports = ProductController;