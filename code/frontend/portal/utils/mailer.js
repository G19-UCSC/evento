
const nodemailer = require('nodemailer');

const mailer = (to,subject,html) => {

  let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        });
        
        let mailOptions = {
          from: 'no-reply@evento.com',
          to: to,
          subject: subject,
          html: html,
        };
        
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            res.json(err);
          } else {
            res.json(info);
          }
        });
      }

module.exports = mailer;