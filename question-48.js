// 문제 48번: 클로저에 대해 설명하고 예를 들어보세요.

// 클로저 : 함수가 자신이 선언되었을 때의 환경(스코프) 외부에 있는 변수를 기억하고 이에 접근할 수 있는 것을 말한다.

function outerFunction(x) {
  // 내부 함수(innerFunction)를 반환
  function innerFunction(y) {
      return x + y; // outerFunction의 매개변수 x에 접근 가능
  }

  return innerFunction;
}

// outerFunction을 호출하여 반환된 innerFunction을 변수에 저장
const closureFunction = outerFunction(10);

// closureFunction을 호출
const result = closureFunction(5);

console.log(result); // 15