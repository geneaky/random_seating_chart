const express = require('express');
const httpError = require('http-errors');
const {mongoose} = require('./schemas');
const UserRouter = require('./api/routes/user.route');
require('dotenv').config();

mongoose.connection.on('error', err => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.use('/users',UserRouter);

app.use((err, req, res, next) => {
    res.status(err.status|| 500).send(err.message);
});

app.listen(8080, () => {
    console.log('Server Start!');
});