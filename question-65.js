// 문제 65번 : Map객체를 사용해 키-값 쌍의 컬렉션을 생성하는 코드를 작성하세요.

// Map 객체 생성
const myMap = new Map();

// 키-값 쌍 추가
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Map의 크기 출력
console.log(myMap.size); // 출력: 3

// 특정 키에 해당하는 값 출력
console.log(myMap.get("key2")); // 출력: value2
