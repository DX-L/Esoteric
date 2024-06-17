module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
    jwtExpiresIn: '1h',
};
