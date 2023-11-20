// 문제 68번 : promise를 선언하고 사용하는 코드를 작성해보세요.

const newPromise = new Promise((resolve, reject) => {
  // 랜덤하게 작업이 성공할지 실패할지 결정
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    if (isSuccess) {
      resolve("성공 결과");
    } else {
      reject("에러 메시지");
    }
  }, 1000);
});

// Promise 사용
newPromise
  .then((result) => {
    console.log("성공:", result);
  })
  .catch((error) => {
    console.error("에러:", error);
  });