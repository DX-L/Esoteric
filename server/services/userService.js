const User = require('../models/User');
const { DatabaseQueryError, DataGenerationError } = require('../utils/customErrors');
const { numCaptcha } = require('../utils/generateCaptcha');
const generateToken = require('../utils/generateToken');
const gmailsend = require('../utils/gmailsend');
const { doubleToken, bindAccessToken, bindRefreshToken } = require('./cookieService');

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
        await User.updateOne({ email: toEmail }, { $set: { valid_code: captcha } });
    } catch (err) {
        throw new DatabaseQueryError('Database: update valid code failed');
    }
    try {
        // await gmailsend(toEmail, captcha);
        await gmailsend(toEmail, captcha);
    } catch (err) {
        throw new DataGenerationError('Email send error');
    }
};

const loginCheck = async (res, deviceType, email, password) => {
    try {
        const user = await User.findOne({ email }).select('+password').exec();
        if (!user) return false;
        const isMatch = await user.matchPassword(password);
        if (!isMatch) return false;

        const { accessJWT, refreshJWT } = doubleToken({
            id: user._id,
            role: user.role,
        });
        bindAccessToken(res, accessJWT);
        bindRefreshToken(res, refreshJWT);
        // 移除设备和token
        user.devices = user.devices.filter((device) => {
            return device.type !== deviceType;
        });
        user.devices.push({ type: deviceType, token: refreshJWT });
        await user.save();

        return user.username;
    } catch (err) {
        throw new DatabaseQueryError(err);
    }
};

const deleteDevice = async (userId, deviceType) => {
    try {
        await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { devices: { type: deviceType } } }
        );
        return true;
    } catch (err) {
        throw new DatabaseQueryError(`delete device error ${err}`);
    }
};

const matchCaptcha = async (res, userId, deviceType, captcha) => {
    try {
        const user = await User.findById({ _id: userId }).select(
            'valid_code role devices'
        );
        if (user.valid_code !== captcha) return false;
        user.valid_code = null;
        user.role = 'client';
        const { accessJWT, refreshJWT } = doubleToken({
            id: user._id,
            role: user.role,
        });
        bindAccessToken(res, accessJWT);
        bindRefreshToken(res, refreshJWT);
        // 移除设备和token
        user.devices = user.devices.filter((device) => {
            return device.type !== deviceType;
        });
        user.devices.push({ type: deviceType, token: refreshJWT });
        await user.save();
        return true;
    } catch (err) {
        throw new DatabaseQueryError(`match captcha error ${err}`);
    }
};

const findUserEmail = async (userId) => {
    try {
        const { email } = await User.findById({ _id: userId }).select('email');
        return email;
    } catch (err) {
        throw new DatabaseQueryError(`can't find user: ${err}`);
    }
};

module.exports = {
    checkExist,
    newUser,
    sendCaptchaEmail,
    loginCheck,
    deleteDevice,
    matchCaptcha,
    findUserEmail,
};
