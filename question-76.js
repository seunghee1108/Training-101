// 문제 76번 : proxy를 사용해 객체의 속성에 대한 접근을 제어하는 코드를 작성해보세요.

// 대상 객체
const targetObject = {
  publicInfo: 'This is public information',
  secret: 'This is a secret!',
};

// Proxy 객체 생성
const handler = {
  get: function (target, prop) {
    if (prop === 'secret') {
      console.log('Access to the secret is not allowed.');
      return undefined; // 읽기가 금지된 경우 undefined 반환
    }
    return target[prop];
  },
};

const proxyObject = new Proxy(targetObject, handler);

// Proxy를 통한 객체 접근
console.log(proxyObject.publicInfo); // "This is public information"
console.log(proxyObject.secret); // "Access to the secret is not allowed."

// 원본 객체에 변경 반영되지 않음
console.log(targetObject.secret); // "This is a secret!"
