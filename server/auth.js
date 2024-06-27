const express = require('express');
const refreshToken = require('./controllers/refreshToken');

const authRouter = express.Router();

authRouter.route('/refresh').get(refreshToken);

module.exports = authRouter;
