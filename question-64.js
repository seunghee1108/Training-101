// 문제 64번 : Set객체를 사용해 중복을 허용하지 않는 컬렉션을 생성하는 코드를 작성하세요.

// Set 객체 생성
const mySet = new Set();

// 값 추가
mySet.add(1);
mySet.add(2);
mySet.add(3);

// 중복된 값은 추가되지 않음
mySet.add(1);

// Set의 크기 출력
console.log("Set의 크기:", mySet.size); // 출력: 3

// Set의 모든 값 출력
console.log("Set의 값들:", mySet); // 출력: Set { 1, 2, 3 }

