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
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f2f2f2;
                    }
                    h2 {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .content {
                        padding: 20px;
                        background-color: #ffffff;
                        margin: 20px;
                        border-radius: 10px;
                        max-width: 500px;
                    }
                    .link a {
                        color: #1dbf73;
                    }
                    a {
                        color: #000000; /* 白色文字 */
                        font-weight: bold;
                        text-decoration: none;
                    }
                    .button {
                        text-align: center;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        margin-left: 30%;
                        display: inline-block;
                        padding: 10px 20px;

                        color: #ffffff;
                        background-color: #1dbf73;
                        text-decoration: none;
                        border-radius: 5px;
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
                    <h2>Reset Your Fiverr Password</h2>
                    <div>
                        <p>
                            Hi, ${username}
                            <br />
                            To set up a new password to your Esoteric account, click "Reset
                            Your Password" below, or use this link:
                        </p>
                        <p>
                            <a href="${short_url}">${short_url}</a>
                        </p>
                        <p>
                            The link will expire in 24 hours. If nothing happens after
                            clicking, copy, and paste the link in your browser.
                        </p>
                    </div>
                    <div class="button"><a href="${short_url}">Reset Your Password</a></div>
                    <p>Thanks,<br />The Esoteric Team</p>
                </div>
                <div class="footer">
                    <p class="disclaimer">
                        Please do not forward this email to anyone to protect the security of
                        your account. <br />
                        This email was intended for ${toEmail}.
                    </p>
                </div>
            </body>
        </html>
`;
    const mailOptions = {
        from: '"Esoteric" <noreply@v.Esoteric.com>', // 在这里设置发件人名字和邮箱
        to: toEmail, // 收件人地址
        subject: 'Esoteric: Reset your password', // 邮件主题
        // text: 'Email Content', // 邮件文本内容
        html: emailHTML, // HTML邮件内容
    };
    await transporter.sendMail(mailOptions);
};
