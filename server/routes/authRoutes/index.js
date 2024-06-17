const express = require('express');
const register = require('./register');
// const login = require('./login');
// const logout = require('./logout');

const router = express.Router();

router.use('/register', register);
// router.use('/login', login);
// router.use('/logout', logout);

module.exports = router;
