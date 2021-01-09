# Javascript & Node.js

## 시작

너무나 당연하지만 Node.js설치와 에디터, 그리고 필요한 나머지 설정을 수행합니다.

저는 설치에는 Window전용 패키지 관리자인 `Chocolatey`를 통해 Nodejs 및 나머지 필요한  
패키지를 설치하도록 하겠습니다.

`Chocolatey`를 설치하실 때에는 관리자 권한으로 명령 프롬프트(cmd)를 실행시킨 뒤,  
아래의 명령어를 실행합니다.

> @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

이렇게 하면 간단하게 `Chocolatey`를 설치하실 수 있습니다.

Chocolatey사용법은 필요한 패키지를 `choco` 명령어로 설치할 수 있습니다.  
다시 cmd에 아래와 같은 명령어를 입력합니다.

> choco install -y nodejs.install

`Chocolatey`는 굳이 node.js프로그래밍 뿐만 아니라 다른 어떠한 프로젝트라도  
필요한 패키지를 윈도우에서 편리하게 설치하는 것을 도와주므로  
잘 사용하시면 개발 생산성을 향상시킬 수 있습니다.

필요한 패키지를 찾으실 때에는 `choco search 패키지명`을 입력하시면 됩니다.  
예로 `nodejs`를 찾으실 때에는

> choco search nodejs

를 해주시면 됩니다.

</hr>

에디터로는 `Visual Studio Code`를 사용하겠습니다.

제가 공부하는데 참고한 사이트에서는 `GoormIDE`라는 웹 IDE를 사용하지만  
저는 VSCode환경이 친숙해서 이쪽을 선택하겠습니다.

`GoormIDE`를 이용하면 별도의 설치없이 다양한 프로그래밍을 수행할 수 있다고 하니  
관심있는 분들은 한 번 이용해 보시는 것도 좋을 듯 합니다.  

## hello javascript

저는 node.js를 활용하는 것은 아니지만 javascript를 활용하기 위해선  
javascript의 소스코드를 해석하는 javascript엔진이 필요합니다.  
보통 이정도 수준에서는 브라우저의 개발자 도구를 이용하거나,  
위의 GoormIDE에서는 Javascript Shell이라는 형태로 javascript엔진 역할을 하는 것 같습니다.  
저는 그냥 node를 이용해서 .js파일을 실행시키고, 해당 결과를 확인할 수 있는 코드를 작성해 보았습니다.

먼저 `main.js`파일을 작성합니다.

```javascript
let main = () => {
    console.log('hello javascript');
}

main();
```

그리고, cmd창을 열어 이 `main.js`이 존재하는 디렉토리로 이동 후, 아래와 같이  
명령어를 실행해 봅니다.

> node main.js

뒤에 .js는 생략 가능하다고 합니다.

그러면 결과로 hello world가 잘 찍히는 것을 확인할 수 있었습니다.

<img src='https://user-images.githubusercontent.com/57579709/103994440-5c686d00-51da-11eb-80c7-db3c87cfc906.png'>

`let` 이라던가 `= () =>` 이라던가 하는건 제가 옛날에 Typescript와 함수형 프로그래밍을  
살짝 맛보기로 공부했을 때 배웠던 것인데, 혹시나 될까 하는 마음에 시험해 봤습니다.  
처음 시작할 때는 보통  

```javascript
console.log('hello javascript);
```

라던가  

```javascript
function main(){
    console.log('hello javascript');
}

main();
```

와 같은 형태로 작성하는게 더 잘 이해될 수 있습니다.

## 참고

1. goormedu, "한눈에 끝내는 Node.js", https://edu.goorm.io/lecture/557/한-눈에-끝내는-node-js
