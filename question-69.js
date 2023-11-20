// 문제 69번 : promise가 해결(fulfilled)되거나 거부된(rejected) 경우를 제작하세요.

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