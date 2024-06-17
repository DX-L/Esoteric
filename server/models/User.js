const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password cannot be blank!'],
            select: false,
        },
        username: {
            type: String,
            sparse: true,
            unique: true,
        },
        // 如果actavite code === activated, 证明用户验证邮箱完成!
        actavite_code: {
            type: String,
        },
        // 表示用户是否在线
        actavite_status: {
            type: Boolean,
            default: false,
        },
        display_name: {
            type: String,
        },
        role: {
            type: String,
            enum: ['client', 'master'],
            default: 'client',
        },
        tag: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
