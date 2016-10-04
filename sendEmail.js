var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var generator = require('xoauth2').createXOAuth2Generator({
    //user: 'kirill.kuparev.dunice@yandex.ru',
    clientId: '83b0f29598a34a7f9afa29ac4f58f3b4',
    clientSecret: '3ef22bc8c01046b5afdbdb2eb895b18a'
    //refreshToken: '{refresh-token}',
    //accessToken: '{cached access token}'
});


sendEmail();


function sendEmail (cb) {
    var mailOptions;





    smtpTransport = nodemailer.createTransport({
      service: 'Yandex',
      auth: {
        user: 'kirill.kuparev.dunice@yandex.ru',
        pass: 'kuparevdunice123'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    mailOptions = {
      from: 'kirill.kuparev.dunice@yandex.ru',
      to: 'kirill.kuparev.dunice@yandex.ru',
      subject: 'ANZ Test Notification',
      text: 'Hello world 🐴',
      html: '<b>Hello world 🐴</b>'

    };

    return smtpTransport.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log("Error. Email not sent."+err);
        } else {
            console.log("Email was sent");
        }

    });

};



