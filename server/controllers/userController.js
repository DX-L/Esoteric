const {
    emailSchema,
    registerSchema,
    usernameSchema,
    loginSchema,
} = require('../utils/Validator');
const {
    checkExist,
    newUser,
    sendCaptchaEmail,
    loginCheck,
    deleteDevice,
    matchCaptcha,
    findUserEmail,
} = require('../services/userService');
const {
    bindAndSaveTokens,
    deleteAccessCookie,
    deleteRefreshCookie,
} = require('../services/cookieService');

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
    await sendCaptchaEmail(email);
    await bindAndSaveTokens(res, id_role, req.device.type);
    res.status(200).json({ msg: 'ok' });
};
//输入用户名/邮箱,密码登录
const login = async (req, res) => {
    const { error } = loginSchema.validate(req.body, {
        allowUnknown: false,
    });
    if (error) return res.status(401).json({ error: error.details[0].message });
    const { email, username, password } = req.body;
    const emailOrusername = email ? email : username;
    const name = await loginCheck(res, req.device.type, emailOrusername, password);
    if (!name) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.status(200).json({ msg: 'Login successful' });
};

const logout = async (req, res) => {
    await deleteDevice(req.user.id, req.device.type);
    deleteAccessCookie(res);
    deleteRefreshCookie(res);
    return res.status(401).json('The user has logged out');
};

const userMatchCaptcha = async (req, res) => {
    const { captcha } = req.body;
    const match = await matchCaptcha(res, req.user.id, req.device.type, captcha);
    if (!match) {
        return res.status(401).json({ msg: 'wrong captcha' });
    }
    return res.status(200).json({ msg: 'ok' });
};

const sendActivateEmail = async (req, res) => {
    const id = req.user.id;
    const email = await findUserEmail(id);
    if (!email) return res.status(401).json({ msg: 'user is not exist' });
    await sendCaptchaEmail(email);
    res.status(200).json({ msg: 'Email has been sent' });
};

// const updatePassword = async (req, res) => {

// }

module.exports = {
    checkEmail,
    checkUsername,
    preRegister,
    login,
    logout,
    userMatchCaptcha,
    sendActivateEmail,
};
