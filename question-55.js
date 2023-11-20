// 문제 55번 : 모듈을 만들고 그것을 내보내는 코드를 작성하세요.

const greeting = "Hello, ";

function greet(name) {
    return greeting + name + "!";
}

// 모듈 내보내기
module.exports = {
    greet: greet
};


// 모듈 불러오기
const myModule = require('./exampleModule');

// 모듈 사용
console.log(myModule.greet("Alice")); // 출력: Hello, Alice!