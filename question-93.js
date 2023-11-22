// 문제 93번 : Express.js 에서 정적 파일을 호스팅하는 방법을 설명하고 예를 들어보세요.

const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

// "public" 디렉토리의 정적 파일을 제공
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, Express with Static Files!');
});


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
