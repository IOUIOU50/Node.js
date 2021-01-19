# socket.io 활용 : 채팅

## express 프로젝트 생성

express-generator를 통해 생성

> //프로젝트 디렉토리에서
> express

또는

> //프로젝트 디렉토리가 아닐 때
> express [프로젝트디렉토리]

## 각종 모듈 설치 및 연동

1. npm init
1. express [디렉토리경로]
1. npm install
1. npm link socket.io
1. npm install pug

## 코드 작성

### 서버사이드 : server.js

```javascript
// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app); 
var io = require('socket.io')(http);    
var path = require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	// 루트 페이지로 접속시 chat.pug 렌더링
	res.render('chat');
});

var count=1; 
// 채팅방에 접속했을 때 - 1
io.on('connection', function(socket){
	console.log('user connected: ', socket.id);
	var name = "익명" + count++;
	socket.name = name;
	io.to(socket.id).emit('create name', name);
	
	// 채팅방 접속이 끊어졌을 때 - 2
	socket.on('disconnect', function(){
		console.log('user disconnected: '+ socket.id + ' ' + socket.name);
	});
	
	// 메세지를 보냈을 때 - 3 
	socket.on('send message', function(name, text){
		var msg = name + ' : ' + text;
		socket.name = name;
		console.log(msg);
		io.emit('receive message', msg);
	});
	
});

http.listen(3000, function(){ 
	console.log('server on..');
});
```

### 코드별 분석