const Product = require('../../../model/product')
const Categories = require('../../../model/category')

module.exports = async(req, res ) => {
    try {
        const category = req.params.category;
        const products = await Product.find({category: category});
        //console.log(products)
        const categories = await Categories.find();
        //console.log(categories)

        res.render('pages/products', {categories: categories, products:products})

    }
    catch (err) {

    }


}