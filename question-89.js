// 문제 89번 : Node.js에서 비동기 함수를 사용하는 예를 작성해보세요.

const fs = require('fs');

// 비동기 함수 예제: 파일 읽기
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // 에러가 발생하면 reject 호출
      } else {
        resolve(data); // 읽은 데이터를 resolve 호출
      }
    });
  });
}

// 비동기 함수 사용 예제
const filePath = 'example.txt';

readFileAsync(filePath)
  .then(data => {
    console.log('File contents:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
