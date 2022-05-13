const express = require('express');
const userService = require('../../services/user.service');

const router = express.Router();

router.post('/register',(req, res, next) => {
    userService.registerUser(req, res, next);
});

router.post('/login', (req, res, next) => {
    userService.loginUser(req, res, next);
});



module.exports = router;