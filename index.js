'use-strict';
/*eslint-disable no-console*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 3000;

const homepage = path.join(__dirname, 'index.html');

const server = http.createServer((req, res)=>{
	let route = url.parse(req.url).pathname;

	if(route === '/'){
		fs.readFile(homepage, 'utf-8', (err, data)=>{
			if(err){
				res.statusCode = 404;
				res.end(err.message);
			}
			else{
				res.writeHead(200, {'content-type':'text/html', 'content-length':data.length,
					'Access-Control-Allow-Origin':'*'});
				res.end(data);
			}
		});
	}
});
server.listen(port, host,()=> console.log('Server running.'));
