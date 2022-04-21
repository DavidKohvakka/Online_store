const express = require('express');
const router =  express.Router();

//app
const homepage = require('./controller/app/homepage')
const products = require('./controller/app/products')
const productsByCategory = require('./controller/app/products_category')
const product = require('./controller/app/product');
const login = require('./controller/app/login')
const register = require('./controller/app/register')
const { route } = require('express/lib/application');

//admin
const admin = require('./controller/admin/controlpage');
const adminProductAdd = require('./controller/admin/product_add');

//api
const adminProductCreate = require('./controller/api/product/create');
const loginUser = require('./controller/api/loginUser');
const registerUser = require('./controller/api/registerUser')


//app
router.get('/', homepage);
router.get('/products/all', products);
router.get('/products/:category', productsByCategory)
router.get('/product/:name', product);
router.get('/login', login)
router.get('/register', register)

//api
router.post('/admin/product/add', adminProductCreate);
router.post('/login', loginUser);
router.post('/register', registerUser);

//admin
router.get('/admin', admin);
router.get('/admin/product/add', adminProductAdd);

module.exports = router;