// Importing http module
var http = require('http');

// Create a server object which listens on port 300
http.createServer(function (req, res) {
	// Write a response to the client
	res.write('Hello World!');

	// End the response
	res.end();
}).listen(4000);
