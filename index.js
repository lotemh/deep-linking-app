var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index', {state: 'red'});
});

app.get('/red', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/blue', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/orange', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/green', function(request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


