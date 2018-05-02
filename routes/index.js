var microphonesJSON = require('../microphones.json');
var site_title = "Microfonisivut";

exports.home = function(req, res) {
	
	var microphones = microphonesJSON.microphones;
	
	res.render('home', {
		site_title : site_title,
		microphones : microphones
	});
};

exports.microphone_info = function(req, res) {
	
	var microphones = microphonesJSON.microphones;
	
	var microphone;
	
	for (var i = 0; i < microphones.length; i++) {
		if(microphones[i].url === req.params.microphone_name) {
			microphone = microphones[i];
		}
	};
	
	if(!microphone) {
		res.send("Page not found!");
		return;
	}
	
	res.render('microphone_info', {
		site_title : site_title,
		name : microphone.name,
		text : microphone.text,
		image : microphone.image,
		microphones : microphones
	});
};

exports.notFound = function(req, res) {
	res.send("Page not found!");
};