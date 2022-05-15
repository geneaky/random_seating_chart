const crypto = require('crypto');
const {User} = require('../schemas');
const httpError = require('http-errors');

const registerUser = async (req, res, next) => {

    let existedUser = await User.find({
        name: req.body.data
    }).exec();

    if(existedUser) {
        return res.status(400).end();
    }

    await User.create({
        name: req.body.data
    })
}

const loginUser = async (req, res, next) => {

    let user = await User.find({
        name: req.body.name
    }).exec();

    if(user) {
        return res.status(200).end();
    }

    next(httpError(400,'user not found'));
}

module.exports = {
    registerUser,
    loginUser
}