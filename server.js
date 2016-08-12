var express = require('express');
var app = express();



app.set('port', (process.env.PORT || 3001));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html')
});
app.use(express.static('public'));



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


