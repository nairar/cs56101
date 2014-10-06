
var express  = require('express');
var mongojs = require('mongojs');
var app = express();


var ip = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 4000;
var db = mongojs("cs56101", ['db1']);

app.use(express.static(__dirname + '/public'));


app.get('/env', function(req, res) {
	res.json(process.env);
})
app.get('/hello', function(req, res) {
	res.send("Hello World!");
})

app.listen(port, ip, function() {
	console.log("Server is listening on port "+ port);
})