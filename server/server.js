var express = require("express");
var path = require("path");

var app = express();
console.log('Server up')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080);
