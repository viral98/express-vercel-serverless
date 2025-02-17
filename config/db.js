const mongoose = require('mongoose');
const config = require('./default.json');
const db = config['mongoURI'];

const connectDB = async () => {
    try{
        await mongoose.connect(
            db,
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is connected...');
    }catch(err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;