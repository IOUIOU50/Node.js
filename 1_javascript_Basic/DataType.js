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