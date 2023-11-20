// 문제 52번 : 메서드를 가진 클래스를 선언하는 코드를 작성하세요.

class MyClass {
  constructor(parameter1, parameter2) {
      this.parameter1 = parameter1;
      this.parameter2 = parameter2;
  }

  myMethod() {
      console.log("메서드가 호출되었습니다.");
  }
}

let myObject = new MyClass("값1", "값2");

myObject.myMethod();