const Categories = require('../../../model/category')

module.exports = async(req, res) => {
    try{
        const categories = await Categories.find()
        console.log(categories)
        res.render('pages/products', {categories: categories})
    }
    catch (err) {
        console.log(err)
    }

}