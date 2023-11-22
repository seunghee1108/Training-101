// 문제 85번 : Express.js를 사용해 HTTP코드를 생성하는 코드를 작성하세요.

const express = require('express');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
