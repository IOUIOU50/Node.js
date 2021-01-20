// Run by Node.js
// 입력받은 값을 제곱하는 함수를 만들어서, 익명함수를 통해 출력해봅시다.

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var f = function(a){
	return a*a;
};

rl.on("line", function(line) {
	console.log(f(line));
	rl.close();
}).on("close", function() {
	process.exit();
}); 