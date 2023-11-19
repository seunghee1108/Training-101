// 문제 35번 : 객체의 모든 속성을 순회하며 출력하는 코드를 작성하세요.

const academy = {
  "address" : "대덕대로",
  "number" :  182,
  "name" : "그린컴퓨터아트학원"
}

const keys = Object.keys(academy);

// 배열을 순회하며 속성과 값을 출력
for (const key of keys) {
    console.log(key + ": " + academy[key]);
}

// address: 대덕대로
// number: 182
// name: 그린컴퓨터아트학원