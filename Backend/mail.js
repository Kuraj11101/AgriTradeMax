const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '734848aa2ed8f0ebb530aadb24e9a006-2bf328a5-df9aa133',
        domain: 'sandbox8d4046921bc149ae9e89c900670652d6.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (fullname, email, Serviceneeded, clientType, message, cb) => {
    const mailOptions = {
        sender: fullname,
        from: email,
        to: 'samlyp@yahoo.com',
        Serviceneeded: serviceneeded,
        clientType: clientType,
        message: message
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else{
            cb(null, data);
        }
    });

    //export sendMail
    module.exports = sendMail;
}