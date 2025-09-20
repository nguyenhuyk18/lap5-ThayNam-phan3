const { Types } = require('mongoose');
const supplierModels = require('../models/Supplier');
const productModels = require('../models/Product');

class SupplierController {
    static createSupplier = async (req, res, next) => {
        const data = req.body;
        const { name, address, phone } = data
        try {
            if (await supplierModels.insertOne({ name: name, address: address, phone: phone })) {
                res.status(201).json({ message: 'Thêm supplier thành công !!!' });
                return;
            }
        } catch (error) {
            console.log(error);
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }

    static findSupplier = async (req, res, next) => {
        const id = req.params.id;
        // console.log(id)
        try {
            const rs = await supplierModels.findOne({ _id: new Types.ObjectId(id) })
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

    static getAll = async (req, res) => {
        const rs = await supplierModels.find();
        // return rs;
        res.status(200).json(rs)
    }

    static deleteSupplier = async (req, res, next) => {
        const id = req.params.id;



        try {
            // console.log(await productModels.findOne({ supplierId: new Types.ObjectId(id) }))
            if (await productModels.findOne({ supplierId: new Types.ObjectId(id) })) {
                const err = new Error('Trùng Lắp Dữ Liệu Không Thể Xóa !!');
                err.status = 500;
                next(err);
                return;
            }

            if (await supplierModels.deleteOne({ _id: new Types.ObjectId(id) })) {
                res.status(201).json({ message: 'Xóa supplier thành công !!!' });
                return;
            }
        } catch (error) {
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }

    static updateSupplier = async (req, res, next) => {
        const id = req.params.id;
        const data = req.body;
        const { name, address, phone } = data
        try {
            if (await supplierModels.updateOne({ _id: new Types.ObjectId(id) }, { name: name, address: address, phone: phone })) {
                res.status(201).json({ message: 'Sửa supplierthành công !!!' });
                return;
            }
        } catch (error) {
            console.log(error);
            const err = new Error('Lỗi đã xảy ra !!');
            err.status = 500;
            next(err);
            return;
        }
    }
}

module.exports = SupplierController;