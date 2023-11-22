// 문제 95번 : JavaScript 에서 프로토타입 기반 상속을 구현하는 코드를 작성해보세요.

// 부모 객체 생성자 함수
// Animal은 부모 객체를 나타낸다.
function Animal(name) {
  this.name = name;
}

// 부모 객체의 메소드 추가
Animal.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

// 자식 객체 생성자 함수
// Dog는 자식 객체를 나타낸다.
function Dog(name, breed) {
  // 부모 객체 생성자 호출 (상속)
  // Animal.call(this, name)는 부모 객체의 생성자를 자식 객체에서 호출하는 부분이다.
  Animal.call(this, name);
  this.breed = breed;
}

// 자식 객체는 Object.create(Animal.prototype)를 사용하여 부모 객체의 프로토타입을 상속한다.
Dog.prototype = Object.create(Animal.prototype);

// 자식 객체의 메소드 추가
Dog.prototype.bark = function() {
  console.log('Woof, woof!');
};

// 자식 객체의 인스턴스 생성
const myDog = new Dog('Buddy', 'Golden Retriever');

// 부모 객체의 메소드 호출
myDog.sayHello();

// 자식 객체의 메소드 호출
myDog.bark();

