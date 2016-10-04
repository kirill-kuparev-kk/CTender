var express      = require('express'),
    router       = express.Router(),
    Customer         = require('../model/customer.js');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var generator = require('xoauth2').createXOAuth2Generator({
    //user: 'kirill.kuparev.dunice@yandex.ru',
    clientId: '83b0f29598a34a7f9afa29ac4f58f3b4',
    clientSecret: '3ef22bc8c01046b5afdbdb2eb895b18a'
    //refreshToken: '{refresh-token}',
    //accessToken: '{cached access token}'
});

// get all members
router.get('/', function (req, res) {
    //TODO add functionality to get all members when it becomes necessary
});

// create member
router.post('/create', function(req, res){

    console.log("Vhod");
    sendEmail(req.body.name,req.body.phone);


    function sendEmail (name,phone) {
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
            html: '<b>Здарова,вот тебе имя:</b>'+name+'<b>,а вот телефон:</b>'+phone


        };

        return smtpTransport.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log("Error. Email not sent."+err);
            } else {
                console.log("Email was sent");
            }

        });

    };


});



//export router object
module.exports = router;
