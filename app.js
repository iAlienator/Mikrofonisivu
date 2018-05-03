var express = require('express');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// path joining for ejs, so public directory containing images, js and css can be used
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// routes
var routes = require('./routes');

app.get('/', routes.home);
app.get('/:microphone_name?', routes.microphone_info);
app.get('*', routes.notFound);

// start the web-app at localhost:3000
app.listen(3000, function() {
	console.log("The application is running on localhost:3000");
});