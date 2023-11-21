// 문제 73번 : promise.all을 사용해 여러 promise를 동시에 실행하는 코드를 작성해보세요.

function asyncFunction(delay, result) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, delay);
  });
}

async function executeAsyncFunctions() {
  try {
    // Promise.all을 사용하여 여러 비동기 함수를 동시에 호출하고 결과를 기다림
    const results = await Promise.all([
      asyncFunction(2000, 'Result from asyncFunction1'),
      asyncFunction(1500, 'Result from asyncFunction2')
    ]);

    console.log(results);
    // 결과 출력:
    // [
    //   'Result from asyncFunction1',
    //   'Result from asyncFunction2'
    // ]
  } catch (error) {
    console.error('Error:', error);
  }
}

executeAsyncFunctions();
