// 문제 59번 : cjs방식과 esm방식의 차이점을 설명하세요.

// CJS : require 함수와 module.exports 객체를 사용하여 모듈을 가져오고 내보낸다. 코드는 동기적으로 실행됨
// 가져오기
const myModule = require('./myModule');
// 내보내기
module.exports = someFunction;



// ESM : import 및 export 문을 사용하여 모듈을 가져오고 내보낸다. 코드는 비동기적으로 실행됨
// 가져오기
import myModule from './myModule';
// 내보내기
export default someFunction;
