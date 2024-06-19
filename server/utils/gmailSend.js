const nodemailer = require('nodemailer');

module.exports = async (toEmail, captcha) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'esoteric.test1@gmail.com',
            pass: 'CMGV AAZQ Q OIW WMCK',
        },
    });

    // 定义邮件模版
    const emailHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        body { 
            font-family: 'Arial', sans-serif; 
            background-color: #f2f2f2; 
        }
        .content { 
            padding: 20px; 
            text-align: center; 
            background-color: #ffffff; 
            margin: 20px auto;
            width: 80%;
            border-radius: 10px; 
            max-width: 600px;
        }
        .code { 
            font-size: 30px; 
            color: #15b836; 
            margin: 20px; 
            padding: 10px 20px;
            background-color: #e9e9e9; 
            display: inline-block;
            letter-spacing: 8px; 
            border-radius: 5px; 
            font-weight: bold;
        }
        .footer { 
            background-color: #f2f2f2; 
            color: #666; 
            padding: 20px; 
            text-align: center; 
            font-size: 12px;
        }
        </style>
        </head>
        <body>
        <div class="content">
            <h2>You're almost there! Just confirm your email</h2>
            <p>You've successfully created a Esoteric account. To activate your account, please enter this code.</p>
            <div class="code">${captcha}</div>
            <p>Thanks,<br>The Esoteric Team</p>
        </div>
        <div class="footer">
            If you're having trouble finding where to enter the code <a href="#">click here</a>.<br>
            This email was intended for ${toEmail}.
        </div>
        </body>
        </html>
        `;
    const mailOptions = {
        from: '"Esoteric" <noreply@v.Esoteric.com>', // 在这里设置发件人名字和邮箱
        to: toEmail, // 收件人地址
        subject: 'Esoteric: Activate Your New Account', // 邮件主题
        // text: 'Email Content', // 邮件文本内容
        html: emailHTML, // HTML邮件内容（如果需要）
    };
    await transporter.sendMail(mailOptions);
};
