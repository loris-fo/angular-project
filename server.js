var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.render('index')
});


server.listen(port, function() {
  console.log("Server listenning on port " + port);
});

module.exports = server;