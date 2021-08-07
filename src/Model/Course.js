const mongoose = require('mongoose');
const { Schema } = mongoose;

const Course = new Schema ({
    name: {type : String },
    Id: {type : String },
} , {
    timestamps: Date.now
});

module.exports = mongoose.model('Course', Course);
