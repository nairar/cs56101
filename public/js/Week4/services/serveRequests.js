var application = function (app, mongojs, db) {

	app.get('/env', function(req, res) {
		res.json(process.env);
	});

	app.get('/hello', function(req, res) {
		res.send("Hello World!");
	});

	app.get('/employees', function(req, res) {
		res.sendfile('./views/index.html');
	});

	app.get('/employees/data', function (req, res) {
		db.db1.find(function (err, docs) {
			if (err) console.log(err);
			console.log(docs);
			res.json({employees : docs});
		});
	});

	app.post('/employees/data', function (req, res) {
		var emp = req.body;
			db.db1.insert(emp, function(err){
				if (err) console.log(err);
				db.db1.find(function (err, docs) {
				if (err) console.log(err);	
				//console.dir(docs);
				res.json({employees: docs});
			});
		});
	});
}

module.exports = application;