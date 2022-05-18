const express = require('express');
const userService = require('../../services/user.service');

const router = express.Router();

router.post('/register',(req, res, next) => {
    userService.registerUser(req, res, next);
});

router.post('/login', (req, res, next) => {
    userService.loginUser(req, res, next);
});

router.post('/', (req, res, next) => {
    userService.registeUsers(req, res, next);
});

router.get('/', (req, res, next) => {
   userService.findUsers(req, res, next);
});

router.delete('/' ,(req, res, next) => {
    userService.resetUsers(req, res, next);
});

module.exports = router;