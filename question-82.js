// 문제 82번 : Node.js 에서 파일을 읽는 코드를 작성해보세요.

const fs = require('fs');

// 파일 경로
const filePath = 'example.txt';

// 파일 읽기
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('파일을 읽는 도중 오류 발생:', err);
    return;
  }

  console.log('파일 내용:', data);
});
