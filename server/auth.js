const express = require('express');

const authRouter = express.Router();

authRouter.route('/refresh').get((req, res) => {
    res.send('ok');
});

module.exports = authRouter;
