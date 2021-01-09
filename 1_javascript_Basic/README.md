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

[DataType.js](url)

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

[Condition.js](url)

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

[양수 구별하기](url)