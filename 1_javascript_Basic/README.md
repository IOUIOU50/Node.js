# Javascript 시작

## 문법

가장 처음으로 Javascript를 시작해보도록 하겠습니다.

**문법** 파트에서는 [syntax.js](https://github.com/IOUIOU50/Node.js/blob/master/1_javascript_Basic/syntax.js)를 참고하시면 되겠습니다.

**기본적**으로 자바스크립트는 다른 프로그래밍언어와 유별나게 다른 문법을 가지고 있는 것은 아닙니다.(말 그대로 **기본적**으로입니다. 자바스크립트만의 특별한 문법 역시 가지고 있습니다.)  

간략하게 정리하면 아래와 같습니다.

    * 세미콜론으로 문장 종료
    * 변수명은 항상 알파벳이나 '_'(언더바)로 시작
    * 대소문자 구분
    * 예약어는 사용 불가(break, case, catch, etc.)
    * 중괄호를 이용하여 구역을 구분
    * c/c++과 같은 조건문과 반복문

저의 경우에는 `node`환경에서 자바스크립트를 테스트해보기 위해  
`main.js`라는 파일을 만들고, 여기에 자바스크립트 코드를 작성한 후  
cmd창에서 `node main.js`(.js 확장자는 생략 가능)을 입력하여  
자바스크립트의 동작을 확인하겠습니다.

### main.js

#### 소스코드

```javascript
var a = 1;
b = 2; 

console.log("a : " + a);
console.log("b : " + b);

var c = 3, d = 10;
var str1 = "hello";
var str2 = "Javascript";
var str3 = null;

console.log("c : " + c);
console.log("d : " + d);
console.log(str1);
console.log(str2);
console.log(str3);
```

#### 실행결과

```javascript
> node main
```

![alt text](https://user-images.githubusercontent.com/57579709/104084488-c5a7b900-528a-11eb-9113-70d1c30420f3.png)

## 연산자

### 산술연산자

연산자는 다른 프로그래밍에서 쓰이는 연산자와 대부분 동일합니다.  
`+` 연산자 같은 경우에는 변수에 할당된 값이 수학적인 의미를 가지고 있다면 덧셈을 수행하고,  
변수에 할당된 값이 문자열이라면 두 문자열을 이어붙이는 역할을 수행합니다.

`++`, `--`의 증감연산자를 지원하며 전위 연산, 후위 연산을 구분할 수 있습니다.

### 대입연산자

기본적으로 `=`기호를 사용하며, `+=`, `-=`, `*=`, `/=`의 연산도 지원합니다.  
뒤의 연산자같은 경우에는 `a += 1`은 `a = a + 1`을 의미합니다.

### 비교연산자

비교연산자에는 `>, >=, <=, <`가 있습니다. 결과값으로 `boolean`을 나타내는 일종의 함수입니다.

### 논리연산자

논리연산자로는 `==, !=, &&, ||, !`가 있으며 역시 결과로 `boolean`을 나타내게 됩니다.

### 조건연산자

조건연산자는 (조건)? A:B의 형태로 나타내는데, 예로 설명하는 것이 이해하기 더 쉽습니다.

```javascript
(a > b)? console.log("a is bigger than b") : console.log("b is bigger than a");
```

<br/>

<hr/>

## 자료형

[DataType.js](https://github.com/IOUIOU50/Node.js/blob/master/1_javascript_Basic/DataType.js)

자바스크립트에서는 별도의 자료형을 **명시하지 않습니다**. 해당 변수에 대응하는 값에 따라 자료형이 결정됩니다.

예를들어, `a = 1`이라는 코드가 오면, 1은 **정수**로 결정되고,
`a = '1'`이라는 코드가 오면 1은 **문자열**로 결정됩니다.

이러한 변수들을 선언할 때에는 `var`키워드를 이용하여 변수를 선언합니다.

또한, 자바스크립트의 기본 자료형으로는 `Number, String, Boolean`이 있습니다.  
이들 기본 자료형은 **내장형객체**라는 개념으로 동작하게 되는데,
`new`키워드를 통해 생성할 수 있습니다. 이때 자료형은 number, string. boolean이 아닌 object로 표현됩니다.

### Number

`Number`는 숫자와 관련된 모든 자료형을 가집니다. 예시 소스코드는 아래와 같습니다.

```javascript
var int_data = 1;
var float_data1 = Number('1.0');
var float_data2 = new Number('4.1254'); //new를 통해 객체를 생성
typeof int_data //typeof는 어떤 자료형인지를 반환함
// "number"

typeof float_data1;
// "number"

typeof float_data2; 
// "object"

console.log((255).toString(10));
// "255"

console.log((255).toString(16));
// "ff"

console.log((255).toString(8));
// "377"

console.log((255).toString(2));
// "11111111"
```

### Array

자바스크립트에서 배열은 객체의 형태로 처리됩니다. 어느정도는 문법의 형태로 지원되는 것도 있습니다. 예를 들어

```javascript
var array1 = [1, 2, 3];
```
에서 `typeof array1`이 수행될 때, 자바스크립트에서는 **원시값**을 호출하는데, 이 때 자동적으로 호출되는 함수가 바로 `valueOf()`라는 함수입니다.  
마치 자바에서 println()메소드 호출 시 `Obejct.toString()`메소드가 호출되는 것과 유사한 원리입니다.

## 조건문

[Condition.js](https://github.com/IOUIOU50/Node.js/blob/master/1_javascript_Basic/Condition.js)

결론적으로, 자바와 똑같다고 생각하시면 됩니다. 별도의 설명 없이 아래의 소스코드로 대신하겠습니다.

```javascript
var a = 3;
var result = '';
if(a > 2){
	result = 'a is greater than 2';
}
else if(a == 2){
	result = 'a is 2';
}
else{
	result = 'a is smaller than 2'; 
}

console.log(result);
// "a is greater than 2"
```

switch문의 경우에도 마찬가지입니다.

```javascript
var a = 1; 
var result = '';
      
switch (a) {
	case 1:
		result = 'Number 1';
  break;
	case 2:
		result = 'Number 2';
    break;
	default:
		result = 'I do not know what number';
break; 
}

console.log(result);
// "Number 1"
```

### 조건문 실습

[양수 구별하기](https://github.com/IOUIOU50/Node.js/blob/master/1_javascript_Basic/Exercise.js)

[자판기](https://github.com/IOUIOU50/Node.js/blob/master/1_javascript_Basic/Exercise_2.js)
## 반복문

자바스크립트의 반복문은 다른 프로그래밍 언어와 거의 유사합니다. `for`문을 통해 반복문을 사용할 수 있습니다.

```javascript
var array = new Array();

for (var i = 0; i < 10; i++) {
	array.push(i);
}

console.log(array.toString());
// "0,1,2,3,4,5,6,7,8,9"
```

### for-in 문법

위의 소스코드에서는 배열을 생성하여 배열에 값을 `push`하는 동작을 통해 반복문을 설명했습니다.  
이때, 이미 배열에 값이 존재하고, 배열의 값을 **탐색**하는데 좀 더 간략한 방법을 사용하고 싶을 때  
`for-in`문법을 사용하시면 됩니다.

```javascript
var a = ['a', 'b', 'c', 'x', 'y', 'z'];
var result = '';

for (var i in a) {
	result += 'index:'+ i + ', value:'+ a[i] + '\n'; 
}

console.log(result);

// "index:0, value:a
// index:1, value:b
// index:2, value:c
// index:3, value:x
// index:4, value:y
// index:5, value:z"
```

`for-in`문은 for문으로 모두 대체 가능하고, 배열을 탐색할 때만 사용할 수 있어 그 사용 범위가 제한적이기 때문에 잘 사용하지 않는다고 합니다. (저역시 반복문의 많은 응용이 있는 것을 알고있고, 사용법도 알고 있지만 이러한 사용법이 크게 도움이 된다 생각하지 않고, 오히려 깔끔한 코드를 망치는 것이라 생각합니다.)

### while과 do-while

`while`문은 특정 조건 안에서 계속 반복하는 특성을 지니고 있습니다.

```javascript
var i = 0;

while (i < 10) {
	i++; 
}

console.log(i);
// 10
```

`do-while`문은 최소 1회는 반복문이 반드시 실행되는 특징을 가지고 있습니다. do while같은 경우도 충분히 대체할 방법이 많지만, do while을 쓰는 법이 코드가 더 직관적이고 편리하여 사용법과 응용에 대해 이해하고 있으면 도움이 될 거라 생각합니다.

```javascript
var i = 0; 

do {
  i++;
} while (i < 10)
  
console.log(i)
// 10
```

### 실습
[반복문을 이용하여 역순으로 출력하기](https://github.com/IOUIOU50/Node.js/tree/master/1_javascript_Basic/Exercise_Loop.js)

## 함수

자바스크립트의 함수는 `function`키워드로 선언할 수 있습니다.

중요한 점은, 자바스크립트에서 함수는 하나의 **데이터**로 취급된다는 것입니다.  
덧붙이자면, 자바스크립트에서 함수는 하나의 **객체**로 취급됩니다.

그리고 자바스크립트에서의 함수는 매우매우 중요한 개념이기 때문에 확실히 기초부터 잡고가는것이 중요합니다.  

먼저 함수의 정의입니다. `function`로 선언한다는 것은 언급하였고, 반환형을 **명시하지 않아도** 됩니다. 자료형을 신경쓰지 않아도 되기 때문이죠.  
단, 반환값은 하나만 가질 수 있는데, 만약 여러개의 반환값을 가져야 한다면 **배열**이나 **객체**형태를 적용시킬 수 있겠습니다.

위에서 **자바스크립트의 함수는 데이터, 객체로 취급된다**고 언급하였는데,  
이러한 특성 덕분에 재미있는 활용법을 사용할 수 있습니다. 아래의 코드를 보겠습니다.

```javascript
function sum(a, b) { 
	var c = a + b;
	return c; 
}

var add = sum;
typeof add;
//"function"

add(1,2);
// 3

var student = {
	name : 'goorm',
	age : 20
}

console.log(student.name);
// goorm

delete student.name;
// true

console.log(student.name);
//undefined

delete student;
// false

delete not_exist;
// true

console.log(student.age);
// 20
```

주목할 부분은 바로 이곳입니다.

```javascript
var add = sum;
typeof add;
//"function"
```

sum으로 정의된 함수를 add라는 변수에 담은 모습을 볼 수 있습니다.  
그리고 타입체크를 수행한 결과 function이라고 나타납니다.
함수가 데이터로서 취급되어 해당 데이터 타입이 `function`으로 표시된 것을 확인할 수 있습니다.

아래의 `student`객체를 활용한 소스코드는 `delete`키워드를 통해 객체의 속성을 삭제하는 것을 나타냅니다.  
주의할점은 객체 속성은 자유롭게 지우고, 추가/수정할 수 있으나 객체 자체를 삭제하는 것은 불가능합니다.

## 익명 함수(Anonymous function)

익명함수는 c나 java에는 존재하지 않는 특별한 함수 사용법입니다.

익명함수의 의미 자체는 일회성, 이름이 없는, 즉 익명의 함수라고 생각하시면 됩니다.

이러한 의미처럼 익명함수는 다시 사용할 일이 없는 함수, 즉 한 번만 쓰고 버릴 함수로 익명함수를 사용하게 될 것입니다.  

그렇다면 언제 익명함수를 사용하는가?  
보통 함수 표현식, 콜백 함수, 즉시 실행 함수의 경우에서 익명함수를 주로 사용하게 될 것입니다. 이는 다음에서 설명하겠습니다.

콜백함수에 대한 설명은 `goormedu`에서 전하는 내용을 그대로 인용하겠습니다.

```
...
이처럼 자바스크립트에서는 함수가 데이터로서도 쓰이고, 특별히 이름을 지어주지 않아도 사용 가능하다는 점으로 인해 발생하는 자바스크립트의 중요한 특징이자 장점이 바로 콜백 함수입니다.

콜백 함수에 대해 잠깐 설명하자면 특정 이벤트가 발생하면 호출되는 함수라고 할 수 있습니다.

예를 들어, 버튼을 클릭한다든지, 네트워크를 통해 어떤 데이터가 도착한다든지 등의 이벤트가 발생했을 때, 해당 이벤트에 대응하는 특정한 동작을 하도록 어떤 함수를 호출하여야 할지 미리 지정해줄 수 있는 것이 바로 콜백 함수의 개념입니다.
...

```

다른 개념은 중요하지 않고, 이 부분에서 짚고 넘어갈 점에 두 가지만 언급하겠습니다.

 1. 자바스크립트 함수의 인자(parameter)로 함수가 올 수 있다.
 2. 콜백함수는 어떠한 이벤트 발생에 대해 취할 행동(action)을 정의한다.

[함수 실습 - 제곱 값 출력하기](https://github.com/IOUIOU50/Node.js/tree/master/1_javascript_Basic/Exercise_Function.js)


