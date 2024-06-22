const jwt = require('jsonwebtoken');

// JWT验证中间件
module.exports = (req, res, next) => {
    // 从Cookie中获取token
    const token = req.cookies.accessToken;
    if (token == null) return res.status(401).json('No Authorization'); // 如果没有token，则未授权

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json('Invalid Token'); // 无效的token
        req.user = decoded;
        next();
    });
};
