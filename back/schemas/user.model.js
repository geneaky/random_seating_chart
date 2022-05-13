const {Schema} = require("mongoose");

const User = (mongoose) => {
    mongoose.model('User',new Schema({
        name: String
    }));
}

module.exports = User;