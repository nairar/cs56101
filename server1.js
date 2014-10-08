
var express  = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var app = express();

var application = require('./public/js/Week4/services/serveRequests.js');

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());


var ip = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 4000;

var connectionString = "mongodb://admin:ieJrVhrTNTaL@127.5.80.2:27017/cs56101";

if (process.env.OPENSHIFT_MONGODB_DB_URL == undefined) {
	connectionString = "localhost:27018/cs56101";
}



var db = mongojs(connectionString, ['db1']);

application(app, mongojs, db);




app.listen(port, ip, function() {
	console.log("Server is listening on port "+ port);
})