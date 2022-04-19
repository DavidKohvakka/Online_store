const Category = require('../../../model/category');

module.exports = async (req, res ) => {
    
    try {
        const categories = await Category.find()
        console.log(categories)
        res.render('pages/admin/product_add', {categories: categories})
    }
    catch (err) {
        console.log(err)
        res.render('pages/admin/product_add')
    }

    

    
}