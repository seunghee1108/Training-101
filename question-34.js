// 문제 34번 : 객체의 속성을 삭제하는 코드를 작성하세요.

const academy = {
  "address" : "대덕대로",
  "number" :  182,
  "name" : "그린컴퓨터아트학원"
}

delete academy.name;
console.log(academy);
// { address: '대덕대로', number: 182 }

