// 문제 54번 : 클래스의 인스턴스(instance)를 생성하는 코드를 작성하세요. 

class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}

let person1 = new Person("Alice", 25);