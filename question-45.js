// 문제 45번: 함수 표현식과 함수 선언식의 차이점을 설명하세요.

// 호이스팅 : JavaScript에서 변수와 함수 선언이 코드의 맨 위로 끌어올려지는 현상을 가리킨다.


// 함수 표현식 :  변수 선언만 호이스팅되고, 함수는 할당된 위치에서 정의되므로 변수를 사용하기 전에 함수를 호출하면 오류가 발생한다.
// const 변수명 = () => { }
// const 변수명 = function ( ) { }
const add = function(a, b) {
  return a + b;
};

// 함수 선언식 : 전체가 호이스팅되어 함수가 선언된 위치까지 끌어올려진다. 따라서 함수를 선언하기 전에 호출해도 정상적으로 동작한다.
function add(a, b) {
  return a + b;
}