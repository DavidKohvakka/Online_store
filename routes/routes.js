const express = require('express');
const router =  express.Router();

const homepage = require('./controller/app/homepage')
const products = require('./controller/app/products')

router.get('/', homepage)
router.get('/products', products)

module.exports = router;