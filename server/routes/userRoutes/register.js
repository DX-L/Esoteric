const express = require('express');
const catchAsync = require('../../utils/catchAsync');
const {
    checkEmail,
    preRegister,
    checkUsername,
} = require('../../controllers/userController');
const authenticateToken = require('../../middleware/authenticateToken');

const router = express.Router();

router
    .route('/email')
    .get((req, res) => {
        res.send('ok');
    })
    .patch(catchAsync(checkEmail))
    .post(catchAsync(checkUsername))
    .put(catchAsync(preRegister));

router.route('/userActivate').post(authenticateToken);

module.exports = router;
