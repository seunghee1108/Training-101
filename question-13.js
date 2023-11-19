// 문제 13번 : 자바스크립트에서 대소문자를 구분하는 예를 들어 보세요.

// * 변수 및 함수 이름
var myVariable = 10;
var MyVariable = 20;

function myFunction() {
  // 함수 내부에서도 동일하게 적용
}

// * 객체 속성 및 메서드
var myObject = {
  property: "value",
  Property: "Value2"
};

console.log(myObject.property); // "value"
console.log(myObject.Property); // "value2"



// * 카멜 케이스(Camel Case) 
// 첫 단어는 소문자로 시작하고, 이후의 각 단어는 첫 글자를 대문자로 표기한다.
const studentList = [];

