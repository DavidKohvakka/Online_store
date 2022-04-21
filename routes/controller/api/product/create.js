const Product = require('../../../../model/product');
const Category = require('../../../../model/category');
const Picture = require('../../../../model/picture');


module.exports = async (req, res ) => {
    
    console.log(req.body)


    const NewProduct = new Product(req.body);

    //Create new category if its exist
    const newCategory = async() => {
        if (req.body.newCategory) {
            const NewCategory = new Category({category: req.body.newCategory});
            NewCategory.save((err) => {
                if(err) {
                    console.log("Failed save new category")
                    console.log(err)
                } else {
                    console.log('New category saved succesfully')
                    NewProduct.category = req.body.newCategory;
                    console.log(NewProduct.category)

                    NewProduct.save(async (err) => {
                        if (err) {
                            console.log(err)
                            res.send('Failed to save new product')
                        } else  {
                            console.log('Success')
                
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
                    })
                }
            })
        } else {
            NewProduct.save(async (err) => {
                if (err) {
                    console.log(err)
                    res.send('Failed to save new product')
                } else  {
                    console.log('Success')
        
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
            })
        }
    }

    await newCategory()
    await console.log("jklösdkjfk_________________________-")
    


    
}