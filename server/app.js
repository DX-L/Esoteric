require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const device = require('express-device');
const cookieParser = require('cookie-parser');
const connectMongoDB = require('./config/mongoDB');
const routes = require('./routes/index');
const authRoute = require('./auth');
const { CustomError } = require('./utils/customErrors');

connectMongoDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize({ replaceWith: '_' }));
app.use(device.capture({ parseUserAgent: true }));
app.use(cookieParser());

app.use('/auth', authRoute);
app.use('/api', routes);

app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(process.env.PORT, () => {
    console.log('Server running');
    console.log(`${process.env.DOMIN}`);
});
