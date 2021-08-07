const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/members',
            { useNewUrlParser: true });
        console.log("connected mongoDb");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { connectDb };
