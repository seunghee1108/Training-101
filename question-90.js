// 문제 90번 : JavaScript에서 map, filter, reduce 함수를 사용하는 예를 들어보세요.

const numbers = [1, 2, 3, 4, 5];

// map()
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers);  // [1, 4, 9, 16, 25]  (각 요소를 제곱한 결과가 모인 새 배열)


// filter()
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);  // [2, 4] (짝수만 모인 새 배열)


// reduce()
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

console.log(sum);  // 15 (모든 요소의 합)