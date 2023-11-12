// 문제 17번 : 자바스크립트에서 ==와 ===의 차이점을 설명해보세요.

// == 동등 연산자 : 값의 동등 여부를 확인할 때 사용
"5" == 5;  
console.log("5" == 5);  // true
0 == false;
console.log(0 == false);  // true
null == undefined;
console.log(null == undefined);  // true


// === 일치 연산자 : 값과 데이터 타입이 모두 동일한지를 확인할 때 사용 (좀 더 엄격하게 사용)
"5" === 5;
console.log("5" === 5);   // false
0 === false;
console.log(0 === false);  // false
null === undefined;
console.log(null === undefined); // false

