const {Schema} = require("mongoose");

const User = (mongoose) => {
    return mongoose.model('User',new Schema({
        id: String,
        pwd: String,
        nick: String
    }));
}

module.exports = User;