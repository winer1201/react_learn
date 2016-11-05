
import express from 'express';
import send from './send';

const app = express();

app.get('/',(...args)=>{
	return send(...args);
});

app.get('/client.min.js', (req, res) => {
  res.sendFile('client.min.js', {root: 'build/static'});
});

app.get('/test', (req, res) => {
	res.status(200).send("test");
});

const server  = require('http').createServer(app);
server.listen(5000, "0.0.0.0", () => {
	let host  = server.address().address;
	let port  = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});

