// 문제 28번 : continue 문을 사용해 짝수만 출력하는 코드를 작성하세요.

for (let i = 1; i <= 10; i++) {
  // 홀수인 경우 continue를 사용하여 건너뛰기
  if (i % 2 !== 0) {
      continue;
  }

  console.log(i); // 짝수인 경우만 출력
}