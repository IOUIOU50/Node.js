// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	// if문과 switch문 이용
	// 입력값 출력은 아래와 같이 사용
    // console.log(line);
    var price = Number(line);
    switch (price){
        case 200:
            console.log('웰치스');
            break;

        case 300:
            console.log('코코팜');
            break;
        
        case 500:
            console.log('아이스티');
            break;

        default:
            console.log(line);
    }
    
	
	rl.close();
}).on("close", function() {
	process.exit();
});