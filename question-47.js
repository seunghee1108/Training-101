// 문제 47번: 콜백 함수를 사용하는 코드를 작성하세요.

function add(a, b) {
  return a + b;
}

function addNumbers(x, y, callback) {
  const result = callback(x, y);
  console.log(result);
}

addNumbers(3, 4, add);