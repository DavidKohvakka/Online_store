const mongoose = require('mongoose');

const mongooseConnect = async () => {
    try{
        const mongoConnect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo connected succefully: ${mongoConnect.connection.host}`);
    }
    catch (err) {
        console.log(err);
    };
};

mongooseConnect();

module.exports = mongooseConnect