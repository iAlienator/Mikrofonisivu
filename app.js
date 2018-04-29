var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static.join(__dirname, 'public'));

// routes
app.get('/', routes.home);
app.get('*', routes.notFound);

app.listen(3000, function() {
	console.log("The applictaion is running on localhost:3000");
});