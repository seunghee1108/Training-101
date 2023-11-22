// 문제 92번 : Node.js에서 path 모듈을 사용하여 파일 경로를 조작하는 코드를 작성해보세요.

const path = require('path');

// 상대 경로를 절대 경로로 변환
const relativePath = '../src/index.js';
const absolutePath = path.resolve(relativePath);
console.log('Absolute Path:', absolutePath);