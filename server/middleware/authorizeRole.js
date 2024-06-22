// eg: allowedRoles = [inactivated, client, master]
module.exports = (allowedRoles) => {
    return (req, res, next) => {
        const { role } = req.user;
        if (allowedRoles.includes(role)) {
            next();
        } else {
            res.status(403).send(
                `Role: ${role}. Access Denied: Insufficient permissions`
            );
        }
    };
};
