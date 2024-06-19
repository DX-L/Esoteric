const jwt = require('jsonwebtoken');

module.exports = (data = {}, secretCode) => {
    return jwt.sign(data, secretCode, {
        expiresIn: '1d', // 令牌有效期
    });
};
