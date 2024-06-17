const User = require('../models/User');
const { DatabaseQueryError } = require('../utils/customErrors');

// 验证参数是否在数据库中存在(邮箱/用户名)
// 存在返回true, 不存在返回false
const checkExist = async (data = {}) => {
    try {
        const status = await User.findOne(data);
        return status;
    } catch (err) {
        throw new DatabaseQueryError(
            `Database query failed for data: ${JSON.stringify(data)}`
        );
    }
};

module.exports = {
    checkExist,
};
