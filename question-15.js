// 문제 15번 : 조건문에서 truthy와 falsy의 개념이 무엇인가요? 각각의 예를 들어보세요.

// * 값이 Truthy이면 조건문은 true로 간주된다.

// 숫자: 0 이외의 모든 숫자는 truthy
var number = 42;
if (number) {
    console.log("이 값은 truthy입니다.");
}

// 문자열: 비어 있지 않은 모든 문자열은 truthy
var string = "Hello, world!";
if (string) {
    console.log("이 값은 truthy입니다.");
}

// 배열 및 객체: 비어 있지 않은 배열과 객체는 truthy
var array = [1, 2, 3];
if (array) {
    console.log("이 값은 truthy입니다.");
}



// * 값이 Falsy이면 조건문은 false로 간주된다.
// null 및 undefined: null과 undefined는 falsy
var nullExample = null;
if (!nullExample) {
    console.log("이 값은 falsy입니다.");
}

// false: 불리언 값이 false인 경우 falsy
var falseExample = false;
if (!falseExample) {
    console.log("이 값은 falsy입니다.");
}

