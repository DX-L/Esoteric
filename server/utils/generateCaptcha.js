const crypto = require('crypto');

const numCaptcha = (length = 6) => {
    // return crypto.randomBytes(length).toString('hex').slice(0, length); //包含字母和数字
    // 仅包含数字
    return Array.from({ length }, () => crypto.randomInt(0, 10)).join('');
};

module.exports = {
    numCaptcha,
};
