const express = require('express');
const router =  express.Router();

//app
const homepage = require('./controller/app/homepage')
const products = require('./controller/app/products')
const product = require('./controller/app/product');
const { route } = require('express/lib/application');

//api
const admin = require('./controller/admin/controlpage');

//admin


//app
router.get('/', homepage);
router.get('/products', products);
router.get('/product', product);

//api


//admin
router.get('/admin', admin);

module.exports = router;