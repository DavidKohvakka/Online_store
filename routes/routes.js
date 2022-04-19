const express = require('express');
const router =  express.Router();

//app
const homepage = require('./controller/app/homepage')
const products = require('./controller/app/products')
const product = require('./controller/app/product');
const { route } = require('express/lib/application');

//admin
const admin = require('./controller/admin/controlpage');
const adminProductAdd = require('./controller/admin/product_add');

//api
const adminProductCreate = require('./controller/api/product/create')


//app
router.get('/', homepage);
router.get('/products', products);
router.get('/product', product);

//api
router.post('/admin/product/add', adminProductCreate);

//admin
router.get('/admin', admin);
router.get('/admin/product/add', adminProductAdd)

module.exports = router;