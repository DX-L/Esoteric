const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const jwtVerify = promisify(jwt.verify);
const User = require('../models/User');
const {
    deleteAccessCookie,
    deleteRefreshCookie,
    bindAccessToken,
    bindRefreshToken,
    doubleToken,
} = require('../services/cookieService');
const generateToken = require('../utils/generateToken');

module.exports = async (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) {
        return res.status(403).json('No Authorization: login again');
    }
    try {
        const decoded = await jwtVerify(token, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(decoded.id).select('locked devices');
        if (!user) {
            return res.status(404).json('User not found');
        }
        if (user.locked) {
            return res.status(403).json(`User ${user.username} is locked`);
        }

        const data = { id: decoded.id, role: decoded.role };
        const deviceType = req.device.type;
        const deviceIndex = user.devices.findIndex((d) => d.type === deviceType);

        if (deviceIndex !== -1) {
            // 如果设备存在, token不一样
            if (user.devices[deviceIndex].token !== token) {
                deleteAccessCookie(res);
                deleteRefreshCookie(res);
                return res.status(409).json(`Already logged in on another ${deviceType}`);
            }
            const remainingTime = decoded.exp * 1000 - Date.now(); // 转换为毫秒
            // token存在, refreshToken少于3天
            if (remainingTime < 3 * 24 * 60 * 60 * 1000) {
                const { accessJWT, refreshJWT } = doubleToken(data);
                bindAccessToken(res, accessJWT);
                bindRefreshToken(res, refreshJWT);
                // 移除设备和token
                user.devices = user.devices.filter((device) => {
                    return device.type !== deviceType;
                });
                user.devices.push({ type: deviceType, token: refreshJWT });
                await user.save();
            } else {
                const accessJWT = generateToken(
                    data,
                    process.env.ACCESS_TOKEN_SECRET,
                    process.env.ACCESS_AGE
                );
                bindAccessToken(res, accessJWT);
            }
            return res.status(200).json('ok');
        } else {
            // 如果设备不存在，
            deleteAccessCookie(res);
            deleteRefreshCookie(res);
            return res.status(401).json('The user has logged out');
        }
    } catch (err) {
        res.status(403).json(`Invalid Token: login again - ${err}`);
    }
};
