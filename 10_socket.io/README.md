# socket.io

## 클라이언트-서버

클라이언트란 서버에게 서비스를 요청하는 사용자나 컴퓨터,  
서버란 요청받은 서비스를 처리하여 제공하는 컴퓨터 입니다.

클라이언트와 서버가 상호작용 방식에는 `polling(ajax)`와 `web socket`이 있습니다.

`polling`은 클라이언트가 서버에 주기적으로 요청 후 응답을 받는 방식,  
`web socket`은 클라이언트와 서버가 한 번 연결이 이루어지면 서로 양방향 통신이 가능한 상태가 되는 양방향 통신 방식입니다.

기존의 폴링 방식으로 웹 애플리케이션을 구현하다보면 사용자와 긴밀히 상호작용하는, 즉 좀 더 동적으로 사용자와 상호작용하는 부분을 구현하기가 힘들어집니다.  
왜냐하면 서버는 클라이언트의 요청이 존재할 때에만 클라이언트로 그 결과값을 보내주고,  
서버 자체에서 데이터가 변경된 부분을 전송하는 것이 불가능하기 때문입니다.  

웹소켓은 클라이언트-서버가 서로 연결이 지속된 상태이기 때문에 서버 내 클라이언트에게 전달해야 할 데이터가 바뀌면, 유기적으로 클라이언트에게 해당 데이터를 전송하는 것이 가능합니다.

이해를 위해 채팅 서비스를 가정해봅시다.

폴링방식은 채팅을 입력하는 것은 즉시 서버에 즉시 반영됩니다.  
그러나 채팅을 하는 상대방의 채팅은 즉시 클라이언트로 반영되기가 힘듭니다.  
사용자가 직접 새로고침 버튼이나, 새로운 메시지를 보내는 등의 동작이 추가적으로 필요합니다.  
10초뒤면 자동으로 갱신되게 하는 것도 하나의 방법입니다.

웹소켓은 다릅니다. 클라이언트와 서버가 한 번 통신이 이루어지고 나면 서로가 서로를 인지한 상태이기 때문에 서로의 변화된 내용이 즉각적으로 반영됩니다.  
내가 채팅을 보내면 서버도 바로 알고,  
상대방이 보낸 채팅이 서버에 들어온 것도 내 클라이언트 서비스에 즉각적으로 반영됩니다.

`Socket.io`는 순수 자바스크립트 100%로 구현되어있으며, node.js로 개발되었습니다. 웹 엔진 어느곳에서도 자유롭게 쓰일 수 있다는 것이죠.

하위호환성 역시 구현이 되어 있습니다. 만약 브라우저에 웹소켓을 위한 플러그인이 없으면 AJAX Long Polling방식을 통해 웹소켓을 구현합니다.

설명은 이만하고, 앞으로 Socket.io를 직접 활용해보며 알아보도록 하겠습니다.

## Socket.io 설치

Socket.io도 노드의 모듈 형태로 지원하고 있습니다. 따라서 `npm`명령어로 쉽게 설치할 수 있습니다.

> npm install socket.io

만약 `-g`옵션으로 전역설치 했다면 오류가 발생할 수 있는데,  
이때는 cmd창에 `npm link socket.io`명령어를 입력하거나 로컬로 새로 설치하면 됩니다.

## 파일 작성

먼저 서버쪽의 `server.js`입니다.

```javascript
//server.js

var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.listen(3000);

function handler (req, res) {
	fs.readFile('index.html', function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}
		res.writeHead(200);
		res.end(data);
	});
}

io.on('connection', function (socket) {  // 1
	socket.emit('news', { serverData : "서버 작동" });
	
	socket.on('client login', function (data) {  // 2
		console.log(data);
	});
		
	socket.on('disconnect', function(){  // 3
		console.log('접속이 종료되었습니다.');
	});

});
```


코드를 자세히 분석해 보겠습니다.

```javascript
//server.js

var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.listen(3000);

function handler (req, res) {
	fs.readFile('index.html', function (err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}
		res.writeHead(200);
		res.end(data);
	});
}
```

1~20행은 페이지 접속 시 index.html을 불러오고 에러를 처리하는 부분입니다.

---

```javascript
io.on('connection', function (socket) {  // 1
```

`conection` 부분은 `socket.io`의 기본 이벤트로 사용자가 웹사이트를 열면 자동으로 발생하는 이벤트입니다.  
이때, 이벤트로 등록하는 함수에는 접속한 사용자의 소켓이 파라미터로 전달되는데, 각 클라이언트에 관련한 이벤트를 작성하려면 이 connection 리스너 함수 안에서 socket을 사용하면 됩니다.

connection 안에서 이벤트를 작성할 때에는 `socket.on('이벤트이름', 함수)`형식으로 작성하면 됩니다. 데이터를 전달하고 싶을 때에는 함수 대신 변수를 넣어주어도 됩니다.

`socket.emit`은 이벤트를 발생시키는 함수입니다. 서버쪽에서 `emit()`함수를 통해 이벤트를 발생시키면 클라이언트측의 이벤트 리스너에서 