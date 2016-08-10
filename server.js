var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html')
});
app.use(express.static('public'));

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});