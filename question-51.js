// 문제 51번 : 생성자를 가진 클래스를 선언하는 코드를 작성하세요.

class MyClass {
  constructor(parameter1, parameter2) {
      this.parameter1 = parameter1;
      this.parameter2 = parameter2;
  }
}

// 클래스 인스턴스 생성
let myObject = new MyClass("값1", "값2");

console.log(myObject);
// MyClass { parameter1: '값1', parameter2: '값2' }