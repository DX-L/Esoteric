const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const deviceSchema = new Schema(
    {
        type: {
            type: String,
            enum: ['desktop', 'phone', 'tablet'], // 限定设备类型为桌面、移动和平板三种
            required: true,
        },
        token: {
            type: String,
            required: true,
            default: null,
        },
    },
    { _id: false }
);

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Email cannot be blank!'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password cannot be blank!'],
            select: false,
        },
        username: {
            type: String,
            required: [true, 'Username cannot be blank!'],
            unique: true,
        },
        //
        valid_code: {
            type: String,
        },
        // 表示用户被锁,
        locked: {
            type: Boolean,
            default: false,
        },
        display_name: {
            type: String,
        },
        role: {
            type: String,
            enum: ['inactivated', 'client', 'master'],
            default: 'inactivated',
        },
        tag: {
            type: [String],
        },
        devices: [deviceSchema],
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
