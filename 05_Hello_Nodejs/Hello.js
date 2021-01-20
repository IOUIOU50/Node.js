/********************************************** */
// 웹 서버를 통한 hello nodejs 출력

var server = require('http');

server.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end("Hello node.js! \n");
}).listen(3000, 'localhost');

console.log('Server is running at http://localhost:3000/');

/********************************************** */
//  파읽 읽기를 통한 Hello nodejs 출력

var fs = require("fs"); 

fs.readFile('./hello.txt', encoding = 'utf-8', function(err, data) {
	if (err) {
		throw err;
	}
	console.log(data + " Node.js!");
});

/********************************************** */
// 비동기 이벤트를 이용한 Hello nodejs 출력

// main.js

var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str) {
  console.log("Hello! " + str );
});

setTimeout(function() {
  evt.emit("helloNode", "Node.js");
}, 3000);