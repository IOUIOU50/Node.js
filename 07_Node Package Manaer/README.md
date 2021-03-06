# Node Package Manager, NPM

## npm이란

이전에 노드는 모듈화를 통한 객체지향을 실현한다고 말한 적이 있습니다.  
다른 내용은 각설하고, npm은 노드를 개발하는데 있어 필수적입니다.  
우리가 구현하고자 하는 기능들이 npm에 존재할 수 있고, 이를 install하여 사용하기만 하면 됩니다.

## npm 사용법

npm을 사용할 때에는 프로젝트 디렉토리에서 다음과 같은 명령어를 수행하시면 됩니다.

```
> npm install 모듈명
```

---

## 글로벌 설치

어떤 모듈은 노드를 개발할 때 항상 사용하게 되는 경우가 있습니다. 예를 들어 개발 편의성이나 지속적인 서비스를 위한 도구들은 하나의 개별 프로젝트에만 적용하여 사용하는 경우는 드뭅니다.  
예를 들어 `nodemon`, `express`와 같은 모듈은 하나의 프로젝트에서만 사용하는 것이 아니고 대부분의 프로젝트에서 자주 사용하기 때문에 전역으로 설치하는 것이 좋습니다.

필요한 모듈을 전역으로 사용하고자 하려면 `npm install 모듈명 -g`을 사용합니다.  
마지막 `-g`옵션이 **글로벌 설치**를 의미합니다.  
전역으로 설치된 모듈은 제 컴퓨터에서는  
`c:\Users\사용자\AppData\Roaming\npm`
인 것으로 확인했습니다.  
전역으로 설치한 모듈의 목록을 확인하려면 

```
> npm list -g
```
명령어를 이용하면 됩니다.

## 로컬 설치

확장 모듈을 로컬로 설치하려면 현재 cmd창이 열려있는 디렉토리에 패키지를 설치합니다  
로컬로 모듈은 `./node_modules/bin/에 설치됩니다.  

## 한 번에 여러개 모듈 설치

> npm install 모듈1, 모듈2, 모듈3, ...

## 특정 버전의 확장 모듈 설치

> npm install 모듈명@버전

## 모듈 찾기

> npm search 모듈명

## 모듈 정보 확인하기

> npm info 모듈명

## 모듈 업데이트

> // 특정 모듈 업데이트. -g는 생략 가능
> npm update 모듈명 [-g]

> 모든 모듈 업데이트
> npm update


## 모듈 삭제

> npm uninstall 모듈명 [-g]

---

## package.json

`package.json`을 이용하면 중앙 저장소로 node package 배포가 가능합니다.  
그렇다고 꼭 배포를 위해 `package.json`을 활용하지 않고, **확장 모듈에 대한 의존성 관리**에도 사용할 수 있습니다.

`package.json`을 만들 때에는 직접 만들어 줘도 되고, `npm init`명령어를 통해 만들 수도 있습니다.

`package.json`에서 나타내는 `key-value`가 의미하는 내용은 아래와 같습니다.

|key|Value|
|---|-------------------------------------|
|name|프로젝트 이름. 중앙 저장소에 배포할 때에는 version과 필수 항목. 이름에 node나 js가 들어가면 안되고 대문자 사용 불가. 짧고 알기 쉬운 것으로 표시하는것이 올바름
|version|프로젝트 버전을 정의. 3단계로 작성|
|description|프로젝트에 대한 설명. 문자열로 기술. `npm search`명령어로 검색된 리스트에 표기됨|
|keywords|프로젝트를 검색할 때 참조되는 키워드|
|homepage|프로젝트 페이지 주소|
|author|프로젝트 작성자|

---

## 확장모듈 - nodemon

`nodemon`은 노드가 포함된 디렉터리를 감시하고 있다가 파일이 수정되면 자동으로 노드를 재시작하는 확장 모듈입니다. `nodemon`을 이용하면 소스코드를 바꿀 때 노드를 직접 재시작할 필요가 없어 매우 편리합니다.

자주 사용되는 모듈이므로 전역으로 설치하는 것이 좋습니다.

> npm install nodemon -g

사용법은 노드 프로젝트를 시작할 때 `node` 명령어 대신 `nodemon`명령어를 입력하면 됩니다.

> //node를 사용할 때 
> node main.js

> //nodemon을 이용할 때
> nodemon main.js
