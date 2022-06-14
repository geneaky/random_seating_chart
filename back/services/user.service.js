const crypto = require('crypto');
const {User} = require('../schemas');
const httpError = require('http-errors');

const registerUser = async (req, res, next) => {

    let existedUser = await User.findOne({
        id: req.body.data.id,
        pwd: req.body.data.pwd,
        nick: req.body.data.nick
    }).exec();

    if(existedUser) {
        return res.status(400).json({ message : 'already existed'});
    }

    await User.create({
        id: req.body.data.id,
        pwd: req.body.data.pwd,
        nick: req.body.data.nick,
        status: 'teacher'
    })
}

const loginUser = async (req, res, next) => {

    let user = await User.find({
        id: req.body.data.id,
        pwd: req.body.data.pwd,
    }).exec();

    if(user.length!=0) {
        return res.status(200).json(user);
    }

    next(httpError(400,'user not found'));
}

const registeUsers = async (req, res, next) => {
    console.log('호출');
    let data = req.body.data.split(', ');
    console.log(data);
    for(let i = 0 ; i < data.length; i++) {
        let user = await User.findOne({ name : data[i]});
        console.log(user);
        if(user) {
            continue;
        } else {
            await User.create({
                name: data[i],
                status: "student"
            });
        }
    }

    return res.status(200).end();
}

const resetUsers = async(req, res, next) => {
    await User.deleteMany({
        status : 'student'
    }).then(() => {
        res.status(200).end();
    })
}

const findUsers = async (req, res, next) => {
    res.json({ data : await User.find()});
}

const updateUser = async (req, res, next) => {
    console.log(req.body);
    await User.updateOne({id: req.body.data.id, pwd: req.body.data.pwd}, {$set : {nick : req.body.data.nick}})
}

module.exports = {
    registerUser,
    loginUser,
    registeUsers,
    findUsers,
    resetUsers,
    updateUser
}