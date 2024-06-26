const express = require('express');
const userRoutes = require('./userStatus.js');

const router = express.Router();

router.use('/user', userRoutes); // Authorization router

module.exports = router;
