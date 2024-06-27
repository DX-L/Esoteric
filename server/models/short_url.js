const mongoose = require('mongoose');

const short_urlSchema = new mongoose.Schema(
    { userId: String, username: String },
    { timestamps: true }
);

// set TTL 3 hours
short_urlSchema.index(
    { createdAt: 1 },
    {
        expireAfterSeconds: 3 * 60 * 60,
    }
);
const short_url = mongoose.model('short_url', short_urlSchema);

module.exports = short_url;
