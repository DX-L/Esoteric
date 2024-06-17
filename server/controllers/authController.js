const { emailSchema } = require('../utils/Validator');
const { checkExist } = require('../services/authService');

//单独检查邮箱是否合法
const checkEmail = async (req, res) => {
    const { email } = req.body;
    const { error } = emailSchema.validate(email);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const existingUser = await checkExist({ email });
    if (existingUser)
        return res.status(400).json({ error: 'email already exists.' });
    res.status(200).json({ msg: 'ok' });
};

module.exports = {
    checkEmail,
};
