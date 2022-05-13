const crypto = require('crypto');
const {User} = require('../schemas');
const httpError = require('http-errors');

const registerUser = async (req, res, next) => {

    let existedUser = await User.find({
        account_id: req.body.account_id,
        account_pwd: hashPassword(req.body.account_pwd)
    }).exec();

    if(existedUser) {
        return res.status(400).end();
    }

    await User.create({
        account_id: req.body.account_id,
        account_pwd: hashPassword(req.body.account_pwd),
        nickname: req.body.nickname
    })
}

const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('base64');
}

const loginUser = async (req, res, next) => {

    let user = await User.find({
        account_id: req.body.account_id,
        account_pwd: hashPassword(req.body.account_pwd)
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