const Product = require('../../../model/product');


module.exports = async(req, res ) => {
    try {
        const name = req.params.name;
        const product = await Product.find({name: name});
        console.log(product)
        res.render('pages/product', {product:product})

    }
    catch (err) {
        console.log(err)
    }


}