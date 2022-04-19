const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: Date,
    updatet_at: Date,

}); 

const category = mongoose.model('category', categorySchema);

module.exports = category;

//exampless
/*
const Monitor= new category({
    'category': 'Monitor'
})

Monitor.save((err) => {
    if (err) {
        console.log(err)
    }
    else{
        console.log('New category added succesfully!')
    }
})

const Computer= new category({
    'category': 'Computer'
})

Computer.save((err) => {
    if (err) {
        console.log(err)
    }
    else{
        console.log('New category added succesfully!')
    }
})
*/

