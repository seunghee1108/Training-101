// 문제 29번 : break 문을 사용해 반복문을 중단하는 코드를 작성하세요.

for (var i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 3) {
      console.log("반복문을 중단합니다.");
      break;
  }
}