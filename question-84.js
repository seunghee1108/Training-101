// 문제 84번 : Node.js 에서 이벤트를 발생시키고 그것을 처리하는 코드를 작성해보세요.

const EventEmitter = require('events');

// 이벤트 발생기 생성
const myEmitter = new EventEmitter();

// 이벤트 리스너 등록
myEmitter.on('customEvent', (arg) => {
  console.log('이벤트 발생:', arg);
});

// 이벤트 발생
myEmitter.emit('customEvent', '이벤트 데이터 전달');
