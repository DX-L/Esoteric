const express = require('express');
const catchAsync = require('../../utils/catchAsync');
const {
    checkEmail,
    preRegister,
    checkUsername,
} = require('../../controllers/userController');

const router = express.Router();

router
    .route('/email')
    .patch(catchAsync(checkEmail))
    .post(catchAsync(checkUsername))
    .put(catchAsync(preRegister));
// router.route('/userActivate')
//     .post

module.exports = router;
