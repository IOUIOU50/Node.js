# express Pug

참고한 사이트에서는 노드를 활용하는 프론트엔드로 `Pug`를 사용합니다.  
기존이 `jade`라는 이름으로 배포되었으나 저작권 문제로 이름을 변경하였다고 합니다.  
사용할 때에는 확장자를 .jade로 사용해도 무방합니다.  
마찬가지로, 관련 자료를 검색할 때에도 jade로 검색해도 많은 자료가 나타날 것입니다.

## pug 문법

```jade
html
    head
    body
```

로 작성하면 

```html
<html>
    <head>
    </head>
    <body>
    </body>
</head>
```

로 렌더링 됩니다.

기존의 꺾인 괄호를 제거시켜 훨신 단순해지는 문법을 제공합니다.

여기서 닫힌 태그가 없기때문에 어떻게 계층구조를 표현하는가 궁금할텐데, 이미 눈치챘을 수도 있지만 **들여쓰기** 로 계층구조를 표현합니다. 들여쓰기를 할 때에는 스페이스공백, 탭공백 아무 것이나 상관없으나 반드시 같은 개수로 통일해서 사용하여야 합니다.

## pug의 id와 class

`jQuery`같은 경우에 id를 지정할 때 `#`을 이용합니다. pug도 마찬가지입니다. 태그 이름 뒤에 `#`을 붙이고, 바로 id를 적어주어 html 요소에 고유 이름을 부여합니다.

```pug
html    
    head
    body
    div#myDiv1
    div#myDiv2
```

이 pug코드를 html로 렌더링하면

```html
<html>
    <head> </head>
    <body>
        <div id="goormDiv1"></div>
        <div id="goormDiv2"></div>
    </body>
</html>
```

와 같은 html로 바뀌게 됩니다.

## id, class, name

* id : html요소를 구분짓기 위한 식별자
* class : css 스타일을 재활용하기 위한 식별자
* name : <form>의 데이터 전송을 위한 식별자

## 태그의 속성

`#`을 통해 id를 지정 후 , 괄호를 이용하여 해당 태그의 속성을 기술합니다.

```jade
#contents(style="border:1px solid black;")
    input(type="checkbox", checked)
```

위의 코드는 아래의 html과 같습니다.

```html
<div id="contents" style="border:1px solid black;">
    <input type="checkbox" checked />
</div> 
```

## 텍스트 표현

태그에 관한 서술이 끝나면 한 칸 띄어쓰기 후 텍스트를 입력하면 됩니다.

```jade
html
    head
    body
        div#myDiv1 Hello pug!
```

위의 pug는 아래의 html과 같습니다.

```html
<html>
    <head></head>
    <body>
        <div id="myDiv1">Hello pug!</div>
    </body>
</html>
```

에디터에서 표현하는 텍스트가 길 때에는 세로선(|)을 이용하여 표현할 수 있습니다.

아래의 html코드는

```pug
html
    head
    body
        div#goormElement1
            | edu.goorm.io
            | 구름EDU 사이트
```

```html
<html>
    <head> </head>
    <body>
        <div id="goormElement1">edu.goorm.io 구름EDU 사이트</div>
    </body>
</html>
```

## 동적 콘텐츠 표현

pug와 백엔드 서버는 `JSON`을 이용하여 동적인 데이터를 주고받을 수 있습니다.

만약 express가 pug엔진에 

```
{"title":"goorm", "message" : "Welcome to GoormEdu"} 
```

이라는 JSON 데이터를 보내고, 이를 Pug에서 `#{fieldname}`으로 나타내어 원하는 곳에 원하는 데이터를 표기할 수 있습니다.

```pug
html
    head
        title= title
    body
        div#subject #{title}
        div#msg #{message}
```

이 pug는 아래의 html과 같습니다.

```html
<html>
    <head> </head>
    <body>
        <div id="subject">goorm</div>
        <div id="msg">Welcome to GoormEdu</div>
    </body>
</html>
```

단, 전달하는 데이터에 html가 포함되어 있으면 이는 전달되지 않습니다.

가령 

```json
{"content" : <font color='blue'>font< font>"}
```

같은 형태라면 태그가 적용되지 않고, 텍스트로 페이지에 표현됩니다.

html코드로 동작하게 하려면 `#`대신, `!`를 이용하여 `!{fieldname}`과 같은 표기법을 사용해야 합니다.

```pug
...
    div#goormElement1 !{content}
...
```

## pug에서 javascript와 style

보통 javascript나 css를 건드려야 하는 상황에서 html코드는 여러 줄로 표현되는 경우가 많은데, pug에서 여러 줄로 표현할 때에는 세로선(|)을 이용한다고 했었습니다.

하지만 script태그와 style태그만 예외적으로 세로선 없이 여러 줄로 구성된 코드를 지원합니다.

```pug
html
    head
    title Example
    script
    if (foo) {
        bar();
    } else { 
        baz();
    }
```

위의 pug는 아래의 html과 같습니다.

```html
<html>
    <head>
        <title>Example</title>
        <script>
        if(foo) {
            bar();
        } else {
            baz();
        }
        </script>
    </head>
</html>
```

또한 pug의 주석은 슬래시 두개(//)을 이용하여 작성합니다.

```pug
// 주석 처리
div#testDiv
```

위의 주석처리 내용은 html에서 아래와 같습니다.

```html
<!-- 주석 처리 -->
<div id='testDiv'></div>
```

html에는 페이지 소스코드에 포함되는 주석과 포함되지 않는 주석이 존재합니다.

pug에서 만약 포함되지 않는 주석을 사용하고 싶으면 대시기호(-)`//-`를 사용하면 됩니다.

```pug
//- 주석처리
div#testDiv
```

```html
<div id='testDiv'></div>
```

이렇게 주석이 나타나지 않습니다.

---

# pug 및 express 활용하기

이제까지 설명한 pug와 express로 간단한 예제를 수행해 보겠습니다.

먼저 express 프로젝트를 준비합니다.

`npm init`명령어를 입력하며 시작합니다.

> npm init

그리고 프로젝트 디렉토리에 `express`모듈을 설치합니다.

> express [디렉토리경로]
>// cmd가 프로젝트 디렉토리 경로를 기리키고 있으면 생략 가능

마지막으로 express가 의존하는 모듈들을 설치합니다.

> npm install

그리고 pug를 활용한 예제를 수행할 것이기 때문에 pug모듈도 설치합니다.

> npm install pug

사전 준비작업은 여기까지입니다. 다음으로 백엔드 서버를 구현하는 `express`와 프론트엔드 html페이지를 나타내는 `pug`를 연결하겠습니다.

`main.js`라는 파일 하나를 디렉토리에 생성하겠습니다.

```javascript
// main.js

var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'pug');
app.listen(3000, () => {
  console.log("Server has been started");
});

// 최상위 라우트로 접속 시 /test로 리다이렉트 
app.get("/", (req, res) => {
  res.redirect('/test');
});

// Pug 파일 렌더링
app.get("/test", (req, res) => {
  res.render('test', { title: 'Goorm', message: 'Welcome to GoormEdu'});
});
```

코드를 해석해 보겠습니다.

```javascript
var express = require('express');
var app = express();
```

express모듈을 가져와 인스턴스를 생성하는 모습입니다.

```javascript
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'pug');
app.listen(3000, () => {
  console.log("Server has been started");
});
```

7~8번 행을 집중해 보겠습니다.

7번 행에서는 express가 view로 표현할 내용들은 `./views`폴더로부터 가져오겠다는 내용이고,

8번 행에서는 view engine을 `pug`로 하겠다는 의미입니다.

```javascript
// 최상위 라우트로 접속 시 /test로 리다이렉트 
app.get("/", (req, res) => {
  res.redirect('/test');
});
```

이 부분은 get방식으로, 지금은 `localhost`를 통해 접속하므로, 3000포트를 지정해 두었으니 `localhost:3000`으로 접근하면, 기본 최상위 view를 `/test`로 redirect하겠다는 의미입니다.

```javascript
// Pug 파일 렌더링
app.get("/test", (req, res) => {
  res.render('test', { title: 'Goorm', message: 'Welcome to GoormEdu'});
});
```

마지막 부분은 test로 이동해 왔을 때 어떤 페이지를 렌더링할지 나타내는 부분입니다.  
`localhost:3000`로 접근하면 `/test`로  redirect되고, `test`는 무엇을 렌더링할지 알려주게 됩니다.

다음은 pug파일 작성입니다.  
`/views`폴더에 `test.pug`라는 파일을 만들겠습니다. 그리고 pug작성법에 따라 pug파일을 하나 만들어 주겠습니다.

```pug
//-test.pug

html
	head
		title= title
	body 
		h1= title
		div#msg #{message}
		div#cont !{content}
		
		#contents(style="border:1px solid black;")
			input(type="checkbox", checked)
```

서버를 작동시켜 보겠습니다.
cmd창에 아래의 명령어를 입력합니다.

> node main

`nodemon`을 이용하려면

> nodemon main

을 입력하면 되겠습니다.

---

## Pug를 이용한 웹페이지 실습

pug는 html에서 사용하지 못하는 `for`문도 사용할 수 있습니다.  

먼저 html의 ol(ordered list)와 ul(unordered list)를 통한 실습을 수행해 보겠습니다.  
여기선 `main.js`와 같은 파일을 만들지 않고, 프로젝트 초기화시 자동 생성되었단 `app.js`와  
`./bin/www`를 이용하도록 하겠습니다.

이전에 `main.js`에서는 `www`에서 기술할 내용들을 모두 기술했었기 때문에 서버 동작이 가능했었는데, 이번엔 기존의 코드를 재활용하여 수행해 보겠습니다.

`index.pug`파일 생성 후 아래와 같이 작성합니다.

```pug
// index.pug

html
	head
		title= title
	body
		h1 Hello #{title}!
		ul
			-for(var i=0; i<5; i++)
				li 순서없는목록 #{i + 1}
		ol
			-for(var i=0; i<5; i++)
				li 순서있는목록 #{i + 1}
```

다음으로 `app.js`을 보겠습니다.  
`app.js`는 현재 렌더링 할 파일을 `pug`가 아닌 `jade`로 정의하고 있습니다. 이를 `pug`로 다시 수정해 줍시다.

끝입니다. 이제 `npm start`를 통해 서버를 시작하고 `localhost:3000`으로 접속하면 아까 우리가 작성한 pug파일이 렌더링 될 것 입니다.

마지막으로 `/routes/index.js`에서 `localhost:3000`으로 들어오면 `index.pug`가 렌더링 되도록 소스코드를 수정하겠습니다.

