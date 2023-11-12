// 문제 9번 : const, let, var 의 차이점을 설명하세요.

// * const : 한 번 넣으면 바뀌지 않는 값, 재선언, 재할당이 불가능, 범위:{}
const person = {
  name: "Seung",
  age: 28
};
// 객체 속성 변경 가능
person.name = "Hee";
console.log(person); // { name: 'Hee', age: 28 }


// * let : 재선언 불가능, 재할당 가능, 범위:{}
// 재할당 예시
let variable = 5;
console.log(variable); // 5

variable = 10;
console.log(variable); // 10


// * var : 재선언, 재할당 가능 
// 함수 스코프
function exampleVarScope() {
  if (true) {
    var a = 10;
    console.log(a); // 10
  }

  console.log(a); // 10, 블록 외부에서도 접근 가능 (함수 스코프)
}

exampleVarScope()