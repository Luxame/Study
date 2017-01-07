var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello-World');
});

server.listen(12345);

console.log('Server run at localhost:12345/');
