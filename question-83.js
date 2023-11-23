// 문제 83번 : Node.js에서 HTTP 서버를 생성하는 코드를 작성해보세요.

const http = require('http');

// 서버 생성
const server = http.createServer((req, res) => {
  // 요청 처리
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

// 서버 포트 설정
const port = 3000;

// 서버 시작
server.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
