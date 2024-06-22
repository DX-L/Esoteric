const User = require('../models/User');
const { DatabaseQueryError, DataGenerationError } = require('../utils/customErrors');
const { numCaptcha } = require('../utils/generateCaptcha');
const generateToken = require('../utils/generateToken');
const gmailsend = require('../utils/gmailsend');

// 验证参数是否在数据库中存在(邮箱/用户名)
// 存在返回true, 不存在返回false
const checkExist = async (data = {}) => {
    try {
        const status = await User.exists(data);
        return status;
    } catch (err) {
        throw new DatabaseQueryError(
            `Database query failed for data: ${JSON.stringify(data)}`
        );
    }
};

// 创建一个填入邮箱和密码,用户名的用户
const newUser = async ({ email, password, username }) => {
    try {
        const user = new User({ email, password, username });
        await user.save();
        return { id: user._id, role: user.role };
    } catch (err) {
        throw new DatabaseQueryError(`Error creating new user: ${err.message}`);
    }
};

// 发送验证码, 保存验证码在数据库, 成功发送返回true
const sendCaptchaEmail = async (toEmail) => {
    captcha = numCaptcha();
    try {
        // await gmailsend(toEmail, captcha);
        await gmailsend(toEmail, captcha);
    } catch (err) {
        throw new DataGenerationError('Email send error');
    }
    try {
        await User.updateOne({ email: toEmail }, { $set: { valid_code: captcha } });
    } catch (err) {
        throw new DatabaseQueryError('Database: update valid code failed');
    }
};

module.exports = {
    checkExist,
    newUser,
    sendCaptchaEmail,
};
