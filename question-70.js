// 문제 70번 : JavaScript에서 프로미스 체인을 구현하는 코드를 작성해보세요.

// 첫 번째 비동기 작업
const firstAsyncOperation = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("첫 번째 작업 완료"), 1000)
  );

// 두 번째 비동기 작업
const secondAsyncOperation = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("두 번째 작업 완료"), 1000)
  );

// 세 번째 비동기 작업
const thirdAsyncOperation = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("세 번째 작업 완료"), 1000)
  );

// 프로미스 체인 구현
firstAsyncOperation()
  .then((result) => console.log(result))
  .then(() => secondAsyncOperation())
  .then((result) => console.log(result))
  .then(() => thirdAsyncOperation())
  .then((result) => console.log(result))
  .catch((error) => console.error("에러 발생:", error));