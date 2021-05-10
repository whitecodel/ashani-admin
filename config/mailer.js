const router = require('express').Router();
const nodemailer = require('nodemailer');

const sendEmail = async (subject, body) => {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'admin@gmail.com',
        pass: '12345678' 
      }
    });

    var mailOptions = {
      from: 'admin@gmail.com',
      to: 'username@gmail.com',
      subject: subject, 
      text: body
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        resolve(false);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(true);
      }
    });
  });
}

module.exports = sendEmail 