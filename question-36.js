// 문제 36번 : this 키워드에 대해 설명하고 사용 예를 만드세요.

// this는 JavaScript에서 현재 실행 중인 코드에서 사용되는 객체를 참조하는 데에 사용된다.

// 예제1번)
function CounterArrow() {
	this.count = 0;
	setInterval(() => {
		// this는 CountArrow 객체를 가리킴
		this.count++;
		console.log(this.count);
 }, 1000);
}
CounterArrow();


// 예제2번)
function Person(name) {
  this.name = name;
}
const person1 = new Person("Bang");
console.log(person1.name);  // "Bang"
