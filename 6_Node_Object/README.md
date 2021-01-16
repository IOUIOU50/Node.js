# 노드와 모듈

## 모듈이란

노드에서 모듈은 하나의 `조각`이라고 설명할 수 있습니다. 개발하고자 하는 시스템을 이루는 하나의 부품인 것이죠.

## 모듈화?

모듈화는 객체지향에서 중요한 개념 중 하나입니다. 시스템의 효율성을 끌어올리고, 복잡한 문제를 해결하기 쉬운 간단한 문제 단위로 쪼개는 것에서 적용시키기 쉽습니다. 그리고 만약 모듈화가 되어있지 않다면 소스코드는 모든 내용이 통합되어 있어 굉장히 보기 복잡하고 어렵게 될 것입니다.

노드에서 모듈은 `.js`하나와 대응된다고 생각하면 편합니다. 이러한 모듈은 `NPM`으로 편리하게 확장할 수 있으며 필요할 때 마다 모듈을 불러와 소스코드에 포함시키면 끝입니다. 재사용성 측면에서 아주 유리한 이점을 가지고 있는 것이죠

## 노드의 전역객체

이 목차에서는 자주 쓰이는 노드의 전역 객체에 대해 알아보겠습니다.

### console객체

콘솔화면을 제어하는 객체입니다. 자주쓰이는 메소드는 아래와 같습니다.

* console.log() : 메시지 출력
* console.time(label) : 시간측정 시작
* console.timeEnd(label) : 시간측정 종료

### log 사용 예

```javascript
console.log('%d + %d = %d', 1, 2, 1+2);
> 1 + 2 = 3
console.log('%d + %d = %d', 1, 2, 1+2, 4);
> 1 + 2 = 3 4
console.log('%d + %d = %d', 1, 2 );
> 1 + 2 = %d
```

### time 사용 예

```javascript
console.time('time');
console.timeEnd('time');
> time: 0.172ms
```

### process 객체

프로그램과 관련된 기능을 다루는 객체로, 순수 자바스크립트에는 없는 노드객체입니다.

많이 쓰이는 속성과 메소드는 아래와 같습니다.

### 속성

 * process.argv : argument values. 프로그램 매개변수 정보
 * process.env : environment. 컴퓨터 환경 관련 정보
 * process.version : 노드의 버전
 * process.versions : 복수를 뜻하는 's'가 들어간것에 주의. 프로세스에서 사용하는 모듈들의 버전
 * process.arch : architecture. 프로세서의 아키텍처. x64, x86등을 의미
 * process.platform : 플랫폼의 정보. 운영체제를 의미

### 메소드

 * process.exit() : 프로그램 종료
 * process.memoryUsage() : 메모리 사용 정보
 * process.uptime() : 프로그램이 실행된 시간

### Exports 객체

모듈 관련 객체로 기능 확장 역할을 수행합니다. 아래의 코드를 확인해 보겠습니다.

```javascript
// test.js

exports.double = function(r) {
    return r * r;
};
 
exports.plus = function(r) {
    return r + r;
};
```

### 출력

`test.js`에서 double함수와 plus함수를 정의하고, `exports`를 통해 외부 js파일로 export하겠다는 것을 의미합니다.

이제 `test.js`를 불러오는 `main.js`를 한번 확인해 봅시다.

```javascript
// main.js

var caculator = require('./test.js');
console.log('Double value is '+ caculator.double(3));
//calculator.double(3) : 9
console.log('Plus value is ' + caculator.plus(3));
//calculator.plus : 6
```

먼저 `require`를 통해 `test.js`자체를 모듈로서 불러옵니다. 그리고 `test.js`에서 정의된 함수를 호출하려면 함수의 이름을 그대로 사용하되, `main.js`에서 현재 `test.js`는 `calculator`라는 변수에 담겨있기 때문에 `calculator.double()`, `calculator.plus()`로 호출하는 형태로 사용하면 되겠습니다.

### OS 모듈

OS 모듈은 운영체제와 시스템 정보를 가져올 수 있습니니다. 자주 사용하지는 않지만 CPU, 메모리, 디스크의 사용량과 잔여 용량 등을 확인할 떄 사용합니다.  
(개인적으로 프로그램의 성능을 측정할 때 이런 것들을 사용합니다.)

### File System 모듈

앞에서 노드는 `비동기적 / 싱글스레드 / 콜백`방식을 사용한다고 언급한 적이 있습니다. 이를 간단하게나마 설명할 수 있는 곳이 `File System` 모듈입니다. 자주 쓰이고 중요한 개념 중 하나입니다.

객체의 이름은 `fs`이고, `require(fs)`로 불러올 수 있습니다.

### readFile

간단한 .txt 파일 읽기 예제를 수행해 보겠습니다.

```txt
//text.txt
text print
```

이 text파일을 읽어오는 `readFileMain.js`파일을 생성합니다.

```javascript
//readFileMain.js
var fs = require('fs');
```

첫 번째로 **비동기적** 읽기 방식을 사용해 봅시다. 비동기 방식을 사용할 때에는 `call back`함수를 함께 등록하여 파일을 읽고 난 후에 수행할 동작을 지정해 주어야 합니다.

```javascript
// 콜백 함수를 등록하여 비동기적 파일읽기
fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log('비동기적 읽기 ' + data);
});
```

`readFile()`의 세 번째 파라미터에 콜백 함수를 등록한 것을 확인할 수 있습니다. 읽은 데이터는 `data` 변수에 담기게 됩니다.

두 번째로 **동기적** 읽기 방식입니다. 동기적 읽기 방식에서는 노드에서 해당 파일을 다 읽을 때 까지 기다렸다가, `readFile()`함수가 반환하는 값을 변수에 담아줍시다.

```javascript
// 동기적 읽기
var text = fs.readFileSync('text.txt', 'utf8');
console.log('동기적 읽기 ' + text);
```

함수 이름이 `readFileSync`로, `Sync`라는 말이 추가된 것처럼 동기적을 동작하는 함수임을 암시하고 있고, `text`변수를 선언하여 해당 함수가 return하는 파일 읽기의 결과물을 `text` 변수에 저장하는 모습입니다.

---

### writeFile

다음은 파일 쓰기입니다. 

```javascript
// writeFileMain.js
var fs = require('fs');
 
var data = 'fs.writeFile test';
 
fs.writeFile('text1.txt', data, 'utf8', function(err) {
    console.log('비동기적 파일 쓰기 완료');
});
 
 
fs.writeFileSync('text2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');
```

파일에 쓸 데이터를 `data`변수에 담고, `writeFile()`메소드를 사용합니다. 파일 읽기와 마찬가지로 동기적/비동기적을 함수의 이름에 `Sync`를 명시하냐 안하냐에 따라 결정할 수 있습니다.

---

### 예외처리

자바스크립트 뿐만 아니라 파일입출력은 다양한 예외가 발생할 수 있으므로 파일입출력을 할 때에는 `예외처리`가 중요합니다. 자바스크립트는 `try-catch`를 통해 예외처리를 수행합니다.

### 예외처리 - 동기적 방식

동기적 방식에서는 `try-catch`로 예외처리를 수행합니다.

```javascript
// main.js
var fs = require('fs');
 
// 파일 읽기(동기적)
try {
	var data = fs.readFileSync('notexist.txt', 'utf8'); // 파일이 없는데 읽으려 함
	console.log(data);
} catch (err) {
    console.log(err);
}
```

### 예외처리 - 비동기적 방식

비동기적 방식에서는 콜백 함수를 등록할 때 err 파라미터를 같이 넣어주는데, readFile을 수행하다가 예외가 발생하면 err flag가 true가 됩니다. 따라서 `try-catch`방식이 아닌, `err`에 담긴 `boolean`값을 확인하여 오류를 처리하는, `if-else`문을 사용하게 됩니다.

```javascript
// main.js
var fs = require('fs');
 
// 파일 읽기
fs.readFile('notexist.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
    if (err) {
        console.log(err); // 읽기 실패
    }
    else {
        console.log(data); // 읽기 성공
    }
});
```

---

### Event 모듈

Event 모듈은 이벤트를 활용하는 객체에 대해 어떤 이벤트가 발생하면, 이 발생한 이벤트에 대해 대응하는 콜백 함수를 가지고 있습니다. 이러한 함수를 `EventListener`라고 합니다. 이렇게 함으로써 이벤트가 발생하면 -> 등록된 Listener를 순회하며 실행하게 됩니다. 콜백이 실현되고 있는 것이죠. 좀 더 깊은 내용은 디자인 패턴 중 하나인 `Observer Pattern`을 이해하시면 되겠습니다.

[Observer pattern 보충설명](https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4)

이벤트를 활용하기 위해서는 events.EventEmmiter의 인스턴스를 활용해야합니다. 주 메소드는 아래와 같습니다.

 * emitter.addListener(event, listener) : 이벤트를 생성하는 메소드
 * emitter.on(event, listener) : addListener()와 동일. 이벤트를 생성
 * emitter.once(event, listener) : 이벤트를 한 번만 연결한 후 제거
 * emitter.removeListener(event, listener) : 특정 이벤트의 특정 이벤트 핸들러를 제거
 * emitter.removeAllListerner([event]) : 모든 이벤트 핸들러 제거
 * emitter.setMaxListerne(n) : 이벤트 최대 허용 개수를 n으로 지정. 기본 지정 가능 개수는 10개이며, 0을 넘겨주면 연결 개수 제한이 사라짐
 * emitter.emit(eventName[, ...args]) : 이벤트를 발생

간단한 예제를 통한 이해를 수행해봅시다.

```javascript
// 전체 코드
var EventEmitter = require('events');

var custom_event = new EventEmitter();

custom_event.on('call', function() {
	console.log('이벤트 콜');
});

custom_event.emit('call');
```

이제 모듈을 `require`로 불러오는것은 익숙할 것입니다. 단, `events`모듈의 이벤트를 사용하기 위해서는, **events.EventEmmitter인스턴스를 이용한다** 라고 언급한 적이 있습니다.  
최종적으로 이벤트를 활용하기 위해서는 `new EventEmitter()`를 통해 가져와야 할 것입니다.

```javascript
var EventEmitter = require('events');

var custom_event = new EventEmitter();
```

`custom_event`가 바로 우리가 이벤트를 등록하고 사용하기 위한 변수입니다.

위에서 `on()`메소드를 설명했는데, 2개의 인자가 들어갑니다.  
첫 번째 인자는 이벤트의 이름(문자열),  
두 번째 인자는 이벤트 발생시 수행할 동작에 대한 함수입니다.

```javascript
custom_event.on('call', function() {
	console.log('이벤트 콜');
});
```

마지막으로 의도한 상황에서, 해당 이벤트를 발생시키는 코드입니다.

```javascript
custom_event.emit('call');
```

이제 이벤트를 제거하겠습니다.

이벤트를 제거하는 메소드는 두 가지가 있습니다.

* removeListener(eventName) : 특정 이벤트리스너를 제거
* removeAllListener() : 모든 이벤트 리스너 제거

소스코드를 확인해 보겠습니다.

```javascript
var EventEmitter = require('events');

var custom_event = new EventEmitter();

custom_event.on('call', function() {
	console.log('이벤트 콜');
});

custom_event.removeAllListeners();

custom_event.emit('call');
```

`custom_event.on()`부분까지는 동일하고, `removeAllListener()`메소드를 통해 모든 리스너를 제거한 상태에서 eamit();을 호출하면 아무것도 출력되지 않게 됩니다.
