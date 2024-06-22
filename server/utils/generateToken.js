const jwt = require('jsonwebtoken');

module.exports = (data = {}, secretCode, time) => {
    return jwt.sign(data, secretCode, {
        expiresIn: time, // 令牌有效期
    });
};
