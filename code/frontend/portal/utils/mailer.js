
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '',
          pass: ''
        },
      });
      
      let mailOptions = {
        from: 'no-reply@evento.com',
        to: "alwaysvictoryforme@gmail.com",
        subject: `The subject goes here`,
        html: `The body of the email goes here in HTML`,
        // attachments: [
        //   {
        //     filename: `${name}.pdf`,
        //     path: path.join(__dirname, `../../src/assets/books/${name}.pdf`),
        //     contentType: 'application/pdf',
        //   },
        // ],
      };
      
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.json(err);
        } else {
          res.json(info);
        }
      });