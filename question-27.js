// 문제 27번 : try/catch 문을 사용해 예외를 처리하는 코드를 작성하세요.

try {
  // 예외가 발생할 수 있는 코드 블록
  var result = 10 / 0; // 예외 발생: 0으로 나누기
  console.log(result); // 이 코드는 실행되지 않음
} catch (error) {
  // 예외가 발생했을 때 처리할 코드 블록
  console.error("예외가 발생했습니다:", error.message);
} finally {
  // 예외 발생 여부와 상관없이 항상 실행되는 코드 블록
  console.log("finally 블록이 실행되었습니다.");
}