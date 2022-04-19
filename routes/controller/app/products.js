const Categories = require('../../../model/category')
const Product = require('../../../model/product')

module.exports = async(req, res) => {
    try{
        const categories = await Categories.find();
        const products = await Product.find();
        console.log(products)
        const uniqueProducts = Array.from(new Set(products))
         
        console.log(categories)
        res.render('pages/products', {categories: categories, products: products})
    }
    catch (err) {
        console.log(err)
    }

}