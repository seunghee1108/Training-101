// 문제 91번 : Node.js 에서 fs 모듈을 사용하여 디렉토리를 생성하는 코드를 작성해보세요.

const fs = require('fs');

const directoryPath = './newDirectory';

// 디렉토리 생성
fs.mkdir(directoryPath, { recursive: true }, (err) => {
  if (err) {
    console.error('디렉토리 생성 중 오류 발생:', err);
  } else {
    console.log('디렉토리가 성공적으로 생성되었습니다.');
  }
});
