const Joi = require('joi');

// 单独的 email 验证 schema
const emailSchema = Joi.string()
    .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
    })
    .required()
    .messages({
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address',
    });

// 单独的 password 验证 schema
const passwordSchema = Joi.string()
    .min(6)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/)
    .required()
    .messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 6 characters long',
        'string.pattern.base':
            'Password must contain uppercase and lowercase letters, numbers, and punctuation marks.',
    });

// 单独的 username 验证 schema
const usernameSchema = Joi.string()
    .pattern(/^[a-zA-Z0-9_]+$/)
    .required()
    .messages({
        'string.pattern.base':
            'Usernames can only contain letters, numbers, and underscores.',
    });

// 邮箱密码注册的组合验证
const registerSchema = Joi.object({
    email: emailSchema,
    password: passwordSchema,
    username: usernameSchema,
});

module.exports = {
    emailSchema,
    usernameSchema,
    registerSchema,
};
