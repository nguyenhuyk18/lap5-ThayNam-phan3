// const action = require('../models/action');
// const pool = require('../database/client');
const axios = require('axios')

exports.listSuppliers = async (req, res) => {
	const rs = await axios.get('http://127.0.0.1:5204/api/v1/supplier');
	res.render('suppliers/list', { listSupplier: rs.data });
	return;
}

exports.addSupplier = (req, res) => {
	res.render('suppliers/add');
	return;
}


exports.editSupplier = async (req, res) => {
	const rs = await axios.get(`http://127.0.0.1:5204/api/v1/supplier/${req.params.id}`);
	res.render('suppliers/edit', { supplierEdit: rs.data });
	return;
}


