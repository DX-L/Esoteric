const express = require('express');
const catchAsync = require('../../utils/catchAsync');
const { checkEmail } = require('../../controllers/authController');

const router = express.Router();

router
    .route('/email')
    // .get((req, res) => {
    //     res.send('ok');
    // })
    .patch(catchAsync(checkEmail))
    .post();

module.exports = router;
