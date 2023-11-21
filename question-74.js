// 문제 74번 : 비동기 함수에서 예외를 처리하는 방법을 설명하고 예를 들어 보세요.

async function asyncFunction() {
  try {
    // 비동기 작업을 수행
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

asyncFunction();

