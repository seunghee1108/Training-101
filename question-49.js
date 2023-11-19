// 문제 49번: 함수 매개변수 기본값을 설정하는 코드를 작성하세요.

function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

// 기본값을 사용하는 경우
greet(); // Hello, Guest!

// 매개변수에 값을 전달하는 경우
greet("Bang", "Hi"); // Hi, Bang!