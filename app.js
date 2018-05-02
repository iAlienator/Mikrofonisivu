var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', routes.home);
app.get('/:microphone_name?', routes.microphone_info);
app.get('*', routes.notFound);

app.listen(3000, function() {
	console.log("The applictaion is running on localhost:3000");
});