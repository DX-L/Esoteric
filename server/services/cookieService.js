const { DataGenerationError, DatabaseQueryError } = require('../utils/customErrors');
const { addDevice2DB } = require('./deviceService');
const generateToken = require('../utils/generateToken');

const bindAccessToken = (res, token) => {
    res.cookie('accessToken', token, {
        path: '/api',
        httpOnly: false,
        secure: true,
        sameSite: 'Lax',
        maxAge: 15 * 60 * 1000, // 15 min
    });
};

const bindRefreshToken = (res, token) => {
    res.cookie('refreshToken', token, {
        path: '/auth',
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 day
    });
};

// 生成shaungtoken
const doubleToken = (data = {}) => {
    try {
        const accessJWT = generateToken(
            data,
            process.env.ACCESS_TOKEN_SECRET,
            process.env.ACCESS_AGE
        );
        const refreshJWT = generateToken(
            data,
            process.env.REFRESH_TOKEN_SECRET,
            process.env.REFRESH_AGE
        );
        return { accessJWT, refreshJWT };
    } catch (err) {
        throw new DataGenerationError('generate token error');
    }
};

// 生成shaungtoken, 并把refresh Token存在数据库 parameter: data: id and role
const bindAndSaveTokens = async (res, data = {}, deviceType) => {
    const { accessJWT, refreshJWT } = doubleToken(data);
    bindAccessToken(res, accessJWT);
    bindRefreshToken(res, refreshJWT);
    try {
        await addDevice2DB(data.id, deviceType, refreshJWT);
    } catch (err) {
        throw new DatabaseQueryError(err);
    }
};

// 删除accessCookies
const deleteAccessCookie = (res) => {
    res.clearCookie('accessToken', {
        path: '/api',
        httpOnly: false,
        secure: true,
        sameSite: 'Lax',
    });
};

//删除refreshCookies
const deleteRefreshCookie = (res) => {
    res.clearCookie('refreshToken', {
        path: '/auth',
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
    });
};

module.exports = {
    bindAccessToken,
    bindRefreshToken,
    doubleToken,
    bindAndSaveTokens,
    deleteAccessCookie,
    deleteRefreshCookie,
};
