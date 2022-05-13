require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.URI);

const User = require('./user.model')(mongoose);

const db = {};
db.mongoose = mongoose;
db.User = User;

module.exports = db;