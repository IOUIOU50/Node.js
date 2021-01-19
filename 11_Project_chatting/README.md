# socket.io 활용 : 채팅

## express 프로젝트 생성

express-generator를 통해 생성

> //프로젝트 디렉토리에서
> express

또는

> //프로젝트 디렉토리가 아닐 때
> express [프로젝트디렉토리]

## 각종 모듈 설치 및 연동순서 정리

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

### 세부 분석

```javascript
io.on('connection', function(socket){
	console.log('user connected: ', socket.id);
	var name = "익명" + count++;
	socket.name = name;
	io.to(socket.id).emit('create name', name);
```

* 이 코드는 연결이 이루어졌을 때 어떤 이벤트를 발생시킬지 콜백 함수를 등록하는 부분입니다. 이벤트 이름인 `connection`과 이 이벤트가 이루어질 때 수행할 `fuction`을 `on()`메소드의 인자로 전달합니다.
* io.to(socketId).emit : `on`메소드는 이벤트를 등록할 때 쓰는 함수입니다.  
이때, 소켓의 id를 인자로 넘겨주게 되면 해당 소켓에 등록된 클라이언트에만 이벤트를 전달합니다.

---

```javascript
	// 채팅방 접속이 끊어졌을 때 - 2
	socket.on('disconnect', function(){
		console.log('user disconnected: '+ socket.id + ' ' + socket.name);
	});
```

* 이벤트 이름은 `disconnect`, `disconnect`이벤트 발생시 수행할 동작은 콘솔에 disconnected된 유저의 `socket.id`와 `socket.name`출력하기

---

```javascript
	// 메세지를 보냈을 때 - 3 
	socket.on('send message', function(name, text){
		var msg = name + ' : ' + text;
		socket.name = name;
		console.log(msg);
		io.emit('receive message', msg);
	});
	
});
```

* 메시지를 보낸 클라이언트의 이름과, 메시지 내용을 각각 `name`과 `text`라는 이름으로 함수 인자에 전달

---

* `io.emit()` : 서버와 연결된 모든 소켓에게 전달할 때 이벤트 발생
* `socket.emit()` : 한 소켓(한 개의 클라이언트)에만 발생되어야할 이벤트를 발생

## 도전문제 : 채팅방에 접속중인 사용자 목록 보여주기