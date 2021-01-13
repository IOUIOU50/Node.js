# 객체지향

* 자바스크립트는 객체지향 언어
* 객체지향이 포함하는 개념
  - 클래스
  - 객체
  - 메소드
  - 속성
  - 캡슐화
  - 집합
  - 재사용
  - 상속
  - 변형
* 자바스크립트의 객체지향은 **프로토타입** 기반, C++/Java는 **클래스**기반

## 객체

* 객체는 객체가 가지는 상태나 정보에 해당하는 **속성**과 객체가 제공하는 행위, 또는 서비스인 **메소드**를 가질 수 있다.

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

