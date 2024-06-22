const { emailSchema, registerSchema, usernameSchema } = require('../utils/Validator');
const { checkExist, newUser, sendCaptchaEmail } = require('../services/userService');
const { bindAndSaveTokens } = require('../services/cookieService');

//单独检查邮箱是否合法
const checkEmail = async (req, res) => {
    const { email } = req.body;
    const { error } = emailSchema.validate(email);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const existingUser = await checkExist({ email });
    if (existingUser) return res.status(400).json({ error: 'Email already exists.' });
    res.status(200).json({ msg: 'ok' });
};

//单独检查用户名是否合法
const checkUsername = async (req, res) => {
    const { username } = req.body;
    const { error } = usernameSchema.validate(username);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const existingUser = await checkExist({ username });
    if (existingUser) return res.status(400).json({ error: 'Username already exists.' });
    res.status(200).json({ msg: 'ok' });
};
// 对邮箱, 密码和用户名的完整表单注册
const preRegister = async (req, res) => {
    const { error } = registerSchema.validate(req.body, {
        allowUnknown: false,
    });
    if (error) return res.status(400).json({ error: error.details[0].message });
    const id_role = await newUser(req.body); //{ id: user._id, role: user.role };
    const { email } = req.body;
    // await sendCaptchaEmail(email);
    await bindAndSaveTokens(res, id_role, req.device.type);
    res.status(200).json({ msg: 'ok' });
};

module.exports = {
    checkEmail,
    checkUsername,
    preRegister,
};
