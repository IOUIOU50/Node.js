# 객체지향

* 자바스크립트는 객체지향 언어
* 객체지향이 포함하는 개념
  + 클래스
  + 객체
  + 메소드
  + 속성
  + 캡슐화
  + 집합
  + 재사용
  + 상속
  + 변형
* 자바스크립트의 객체지향은 **프로토타입** 기반, C++/Java는 **클래스**기반

> 자바스크립트의 객체지향은 프로토타입 기반

## 객체

* 객체는 객체가 가지는 상태나 정보에 해당하는 **속성**과 객체가 제공하는 행위, 또는 서비스인 **메소드**를 가질 수 있다.

> 객체는 속성과 메소드를 지닌다.

### 객체의 속성 예시

```javascript
var park_ji_sung = { 
	name: "Park Ji Sung",
	height: 178,
	weight: 70,
	position: "RW",
	team : "Queen’s Park Rangers"
};

console.log(park_ji_sung.team);
// "Queen’s Park Rangers"
```

## 클래스

* 객체를 찍어내는 '틀', '템플릿'
* 추상적인 명세 내용을 담는 클래스를 실체화한 것 -> **인스턴스**

> 클래스 : 객체를 찍어내는 틀

## 자바스크립트에서의 객체

자바스크립트에서 객체를 선언할 때에는 **함수**로 선언하며, **대문자로 시작**하는 암묵적인 규칙이 존재한다.  
예시는 다음과 같다.

```javascript
var SoccerPlayer = function () { };

SoccerPlayer.prototype = { 
	name: String,
	age: Number,
	height: Number,
	weight: Number,
	position: String,
	team : String
};

var park_ji_sung = new SoccerPlayer(); 

park_ji_sung.name = "Park Ji Sung"; 
park_ji_sung.age = 31;
park_ji_sung.height = 178;
park_ji_sung.weight = 70;

console.log(park_ji_sung);
```

> 자바스크립트에서 객체는 함수로 표현하며, 대문자로 시작하는 암묵적인 규칙이 있다.

### 자바스크립트에서 객체를 만드는 방법

[참고한 포스트](https://hsp1116.tistory.com/10)

자바스크립트에서 객체를 만드는 방법에는 3가지가 있다.

```
1. 기본 객체의 생성자함수 사용
1. 객체 리터럴 이용
1. 생성자 함수 이용
```

### 기본 객체의 생성자 함수 사용

`new Object()`를 통해 객체를 생성하고, 여기에 필요한 프로퍼티를 추가하는 방식이다.

```javascript
var member = new Object();

member.id = 'iouiou';
member.pw = '1234';
member.gender = 'male';

console.log(typeof member);
// object

console.log(member);
// {id:"iouiou",pw:"1234",gender:"male"}
```

### 객체 리터럴 이용

중괄호({})를 이용하여 내부에 필요한 프로퍼티를 직접 명시한다.

```javascript
var member = {
  id : 'iouiou',
  pw : '1234',
  gender : 'male'
};

console.log(typeof member);
// object

console.log(member);
// {id:"iouiou",pw:"1234",gender:"male"}
```

### 생성자 함수 이용

위에 설명한 방식이다.

## 읽으면 좋은 글

[Prototype 기반의 객체지향](https://hsp1116.tistory.com/6?category=547737)

## 자바스크립트의 상속

자바스크립트는 java에서 `extends` 키워드를 사용하여 상속을 직접적으로 나타내는 것처럼 사용하지는 않는다. 자바스크립트의 상속은 `프로토타입`을 이용하여 상속을 구현한다.

> 자바스크립트의 상속은 프로토타입을 이용한다.

아래의 소스코드를 한 번 읽어보자.

```javascript
function Man() {
	this.name = "Anonymous";
	this.gender = "Man";
	this.Run = function () {
		return this.name + " is running!";
	}
	this.Sleep = function () {
		return this.name + " is sleeping!";
} }

function SoccerPlayer () { 
	this.base = new Man();
	this.name = "Anonymous Soccer Player"; 
	this.Run = function () {
		return this.base.Run();
	}
	this.Pass = function () {
		return this.name + "is passing to other player!";
} }

SoccerPlayer.prototype = new Man();
var player = new SoccerPlayer ();

console.log(player.name);
// "Anonymous Soccer Player"

console.log(player. gender);
// "Man"

console.log(player.Run());
// "Anonymous is running!"

console.log(player.Pass());
// "Anonymous Soccer Player is passing to other player!"

console.log(player.Sleep());
// "Anonymous Soccer Player is sleeping!"
```

먼저 `Man()`함수를 확인해보자.  
대문자로 시작하여 객체임을 암시하는 이 `Man()`이라는 함수 내부에  
`name, gender, Run(), Sleep()`이라는 속성과 메소드를 정의하는 모습을 보여주고 있다.

이제 상속을 실현하는 `SoccerPlayer()`함수를 확인해보자.  
이 함수 역시 대문자로 시작하며 객체임을 암시하고 있다.

객체지향 기본원리들에 대해 자바스크립트가 이런 개념들을 어떻게 실현하는지 위에서 찾아 보았는데, 전통적인 객체지향 언어로 여겨지는 C++/Java와는 조금 개념이 차이가 있어 개인적으로 생각했을 때 개념이 많이 어렵다는 느낌이 든다. 그래서 좀 더 자세히 공부해 보고자 참고한 모질라 재단의 객체 생성과 상속에 대한 포스트를 참고하였고, 이 포스트가 자바스크립트의 객체지향과 상속에 대해 더 엄격하게 설명하고 있는 것 같은 느낌이 들어서 해당 링크를 첨부하는 것이 좋은 방법인 것 같다.

[상속과 프로토타입, 프로토타입 체인](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

## 자바스크립트의 스코프(scope)

일반적인 프로그래밍 언어의 경우 변수의 범위는 `block-scope`이다.  
예를들어, 아래와 같은 Java코드에서

```java
public void calculateMinute(){
  if(time > 60){
   int plusMinute = time/60;
  }
}
```

이 때, if문 밖에서 `plusMinute`속성에 접근하려 하면 컴파일 에러가 뜬다. {}안에 선언된 변수는 해당 블록 내에서만 유효하기 때문이다.

자바스크립트는 기본적으로 `함수 레벨 스코프`이다. 같은 코드를 자바스크립트에서 생각해보면 변수는 if문이 끝나도 접근할 수 있다.

```javascript
// ...
var calculateMinute = function() {
  if(time > 60){
    var plusMinute = time/60;
  }
}
// ...
```

자바스크립트에서 if문 밖에서 plusMinute변수에 접근하는것이 가능하다(!)  
그 이유는 `calculateMinute`이라는 함수 범위 내에서는, 함수 안에서 선언한 변수는 함수 안 어느곳에서든 사라지지 않는다.

이것은 `var`라는 특별한 변수 지정때문인데, 만약 이를 원치 않는 상황이 온다면  
`let`이나 `const`키워드로 변수를 선언하자. 이렇게 하면 다른 프로그래밍 언어들과 같이 `block-scope`의 변수를 만들 수 있게 된다.


