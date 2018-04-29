var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send("Server response on the home page.");
});

app.listen(3000, function() {
	console.log("The applictaion is running on localhost:3000");
});