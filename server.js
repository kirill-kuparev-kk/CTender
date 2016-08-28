var express = require('express');
var app = express();
var mailgun = require('mailgun-js')({apiKey: "key-8119f739e6e9f9fe1d30c19d1db87aba", domain: "sandbox722080f7998d43dc84f290ddbab79720.mailgun.org"});

var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'kirill.kuparev@dunice.ru',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
    console.log(body);
});



app.set('port', (process.env.PORT || 3001));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html')
});
app.use(express.static('public'));



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


