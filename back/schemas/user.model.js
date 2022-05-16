const {Schema} = require("mongoose");

const User = (mongoose) => {
    return mongoose.model('User',new Schema({
        name: String
    }));
}

module.exports = User;