
var express  = require('express');
var app = express();


var ip = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 4000;

app.get('/hello', function(req, res) {
	res.send("Hello World!");
})

app.listen(port, ip, function() {
	console.log("Server is listening on port "+ port);
})