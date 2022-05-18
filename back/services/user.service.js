const crypto = require('crypto');
const {User} = require('../schemas');
const httpError = require('http-errors');

const registerUser = async (req, res, next) => {

    let existedUser = await User.findOne({
        name: req.body.data
    }).exec();

    if(existedUser) {
        return res.status(400).json({ message : 'already existed'});
    }

    await User.create({
        name: req.body.data
    })
}

const loginUser = async (req, res, next) => {

    let user = await User.find({
        name: req.body.data
    }).exec();

    if(user) {
        return res.status(200).end();
    }

    next(httpError(400,'user not found'));
}

const registeUsers = async (req, res, next) => {
    let data = req.body.data.split(', ');
    for(let i = 0 ; i < data.length; i++) {
        let user = await User.find({ name : data[i]}).exec();
        if(user.length != 0) {
            continue;
        } else {
            await User.create({
                name: data[i]
            });
        }
    }

    return res.status(200).end();
}

const resetUsers = async(req, res, next) => {
    await User.deleteMany().then(() => {
        res.status(200).end();
    })
}

const findUsers = async (req, res, next) => {
    res.json({ data : await User.find()});
}

module.exports = {
    registerUser,
    loginUser,
    registeUsers,
    findUsers,
    resetUsers
}