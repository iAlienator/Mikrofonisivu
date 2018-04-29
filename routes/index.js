exports.home = function(req, res) {
	res.render('home', {
		title : "Microfonisivut"
	});
};

exports.notFound = function(req, res) {
	res.send("Page not found!");
};