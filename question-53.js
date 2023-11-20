// 문제 53번 : get과 set 접근자에 대해 설명하고 사용 예를 들어 보세요.

// get : property를 읽으려고 할 때 함수를 호출(실행)하여 값을 리턴한다.
// set : property에 값을 할당하면 함수를 호출(실행)한다.

class Person {
  constructor(name) {
      this._name = name;
  }

  // 이름을 가져오는 get 접근자
  get name() {
      console.log("이름을 가져옵니다.");
      return this._name;
  }

  // 이름을 설정하는 set 접근자
  set name(newName) {
      console.log("이름을 설정합니다.");
      this._name = newName;
  }
}

// 인스턴스 생성
let person = new Person("Bang");

// 현재 이름 가져오기
console.log(person.name); 

// 이름 설정하기
person.name = "Bang"; // Bang

// 변경된 이름 가져오기
console.log(person.name); 
