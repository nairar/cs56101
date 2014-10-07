
var express  = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());


var ip = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 4000;

var connectionString = "mongodb://admin:ieJrVhrTNTaL@127.5.80.2:27017/" + process.env.OPENSHIFT_APP_NAME;

if (process.env.OPENSHIFT_MONGODB_DB_URL == undefined) {
	connectionString = "localhost:27018/cs56101";
}



var db = mongojs(connectionString, ['db1']);

app.get('/env', function(req, res) {
	res.json(process.env);
});

app.get('/hello', function(req, res) {
	res.send("Hello World!");
});

app.get('/employees', function(req, res) {
	var emps = null;

	db.db1.find({}).toArray(function (err, docs) {
		if (err) console.log(err);
		console.log(connectionString);
		console.log(docs);
		
		res.send({employees: docs});
	});

});




app.listen(port, ip, function() {
	console.log("Server is listening on port "+ port);
})