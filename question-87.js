// 문제 87번 : Node.js에서 환경 변수를 사용하는 방법을 설명하고 예를 들어 보세요.

const express = require('express');
const app = express();

// 환경 변수에서 포트 설정 또는 기본값 사용
//  process.env.PORT를 통해 포트 번호를 가져오고, 만약 해당 환경 변수가 설정되어 있지 않다면 기본값으로 3000을 사용한다.
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js with Environment Variables!');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
