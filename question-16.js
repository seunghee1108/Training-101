// 문제 16번 : typeof 연산자를 사용해 변수의 타입을 확인하는 예제 코드를 작성하세요.

// typeof : 변수나 값의 데이터 타입을 확인하는 데 사용

var myNumber = 42;
var myString = "Hello, World!";
var myBoolean = true;
var myArray = [1, 2, 3];
var myObject = { key: "value" };
var myFunction = function() {};

console.log(typeof myNumber);   // "number"
console.log(typeof myString);   // "string"
console.log(typeof myBoolean);  // "boolean"
console.log(typeof myArray);    // "object" (주의: 배열은 객체 타입으로 반환됩니다)
console.log(typeof myObject);   // "object"
console.log(typeof myFunction); // "function"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (typeof null은 "object"로 나옵니다. 이는 JavaScript의 버그로 알려져 있습니다.)
