var express = require('express');
var app = express();

app.set('view engine', 'html');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', {state: 'red'});
});

app.get('/red', function(request, response) {
    response.sendFile(__dirname + '/public/index.html', {state: 'red'});
});

app.get('/blue', function(request, response) {
    response.sendFile(__dirname + '/public/index.html', {state: 'blue'});
});

app.get('/orange', function(request, response) {
    response.sendFile(__dirname + '/public/index.html', {state: 'orange'});
});

app.get('/green', function(request, response) {
    response.sendFile(__dirname + '/public/index.html', {state: 'green'});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


