var express = require ('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/post/test')
	.post(function(req, res, next) {
	  	res.send({
  			"success" : true,
  			"msg" : JSON.stringify(req.body, null, 2)
  		});
	}
);

var server  = require('http').createServer(app);
server.listen(5000, "0.0.0.0", function() {
	var host  = server.address().address;
	var port  = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
	//opne('http://127.0.0.1:' + port);
});