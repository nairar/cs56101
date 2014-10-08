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

	app.get('/employees/:id', function (req, res) {
		var empId = req.params.id;
		db.db1.find({_id : mongojs.ObjectId(empId)}, function (err, doc) {
			if (err) console.log(err);
			res.json({employee : doc});
			
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

	app.put('/employees/:id', function (req, res) {
		console.log(req.body);
		db.db1.update({"_id" : mongojs.ObjectId(req.params.id)}, { "name": req.body.name }, function (err, doc) {
			if (err) console.log("Put error " + err);
			res.json(doc);
			
		});
	});

	app.delete ('/employees/:id', function (req, res) {
		db.db1.remove({_id : mongojs.ObjectId(req.params.id)}, function (err, doc) {
			if (err) {console.log ("Delete error " + err);}
			res.send(doc);
		});
	});
}

module.exports = application;