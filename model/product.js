const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type:String, 
        required: true,
    },
    information: {
        type:String,
        required: true  
    },
    pictures: {type: [String]},
    created_at: Date,
    updatet_at: Date,

}); 

const product = mongoose.model('product', productSchema);

module.exports = product;