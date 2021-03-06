var express = require("express");
var path = require("path");

var app = express();

console.log('Server start');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(app.get('port'), 'localhost', function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});
