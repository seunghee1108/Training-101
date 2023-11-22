// 문제 83번 : Node.js에서 HTTP 서버를 생성하는 코드를 작성해보세요.

const http = require('http');

// 서버 생성
const server = http.createServer((req, res) => {
  // 요청 처리
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

// 서버 포트 및 호스트 설정
const port = 3000;
const host = '127.0.0.1';

// 서버 시작
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
