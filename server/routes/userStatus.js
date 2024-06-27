const express = require('express');
const catchAsync = require('../utils/catchAsync');
const {
    checkEmail,
    preRegister,
    checkUsername,
    login,
    logout,
    userMatchCaptcha,
    sendActivateEmail,
} = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');
const authorizeRole = require('../middleware/authorizeRole');

const router = express.Router();

router
    .route('/register')
    .patch(catchAsync(checkEmail))
    .post(catchAsync(checkUsername))
    .put(catchAsync(preRegister));

router
    .route('/userActivate')
    .get(authenticateToken, authorizeRole(['inactivated']), catchAsync(sendActivateEmail))
    .post(authenticateToken, catchAsync(userMatchCaptcha));

router.route('/login').post(catchAsync(login));

router.route('/logout').get(authenticateToken, catchAsync(logout));

module.exports = router;
