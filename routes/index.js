var microphonesJSON = require('../microphones.json');

exports.home = function(req, res) {
	
	var microphones = microphonesJSON.microphones;
	
	res.render('home', {
		title : "Microfonisivut",
		microphones : microphones
	});
};

exports.notFound = function(req, res) {
	res.send("Page not found!");
};