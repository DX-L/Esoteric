const User = require('../models/User');
const { DatabaseQueryError } = require('../utils/customErrors');
// 异步函数：为用户添加设备
const addDevice2DB = async (userId, deviceType, newToken) => {
    try {
        await User.updateOne(
            { _id: userId },
            { $push: { devices: { type: deviceType, token: newToken } } }
        );
    } catch (err) {
        throw new DatabaseQueryError(`add device error: ${err.message}`);
    }
};

module.exports = {
    addDevice2DB,
};
