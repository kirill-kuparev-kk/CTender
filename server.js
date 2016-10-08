var express = require('express'),
    app = express(),
    router       = express.Router(),
    nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport'),
    generator = require('xoauth2').createXOAuth2Generator({
        clientId: '83b0f29598a34a7f9afa29ac4f58f3b4',
        clientSecret: '3ef22bc8c01046b5afdbdb2eb895b18a'
    });



//var data = {
//    from: 'Excited User <me@samples.mailgun.org>',
//    to: 'kirill.kuparev@dunice.ru',
//    subject: 'Hello',
//    text: 'Testing some Mailgun awesomness!'
//};
//
//mailgun.messages().send(data, function (error, body) {
//    console.log(body);
//});



app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html')
});
app.use(express.static('public'));



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// get all members
router.get('/', function (req, res) {
    //TODO add functionality to get all members when it becomes necessary
});

// create member
router.post('#/sendMessages', function(req, res){


    console.log("body",req.body);

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

});



//export router object
module.exports = router;


