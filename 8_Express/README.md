# express 사용하기

## express란?

노드를 이용한 서비스를 개발할 때 자주 사용하는 프레임워크.  
http모듈을 통해 웹 서버를 구축하는데 있어 개발을 편리하게 해주는 다양한 API를 제공

## express 설치

npm프로젝트를 위해 우선 프로젝틀 디렉토리로 이동 후, npm을 init

> npm init

설치 완료 후 express를 전역으로 설치

> npm install express -g

## express-generator 설치

express프로젝트를 위한 또다른 확장 모듈로, 이 모듈을 사용하면 express를 사용하기 위한 다른 모듈들과 폴더들을 자동으로 구조화

`express-generator`를 사용하기 위해 `npm`을 통해 설치

> npm install express-generator -g

express프로젝트를 만들기 위해 아래의 명령어를 입력

> express [프로젝트 디렉토리]

디렉토리를 입력하지 않으면 cmd가 가리키는 현재 디렉토리에 express 프로젝트가 생성

다음으로 `cd`명령어를 통해 프로젝트 디렉토리로 이동 후, express 프로젝트가 의존하는 모듈을 설치

> //express 명령어 입력 시 디렉토리까지 명시 한 경우
> cd 디렉토리 && npm install

> //프로젝트 디렉토리로 이동한 상태라면
> npm install

## app.js 살펴보기


[app.js]()