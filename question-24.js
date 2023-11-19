// 문제 24번 : 두 변수 x,y의 값을 서로 교환하는 코드를 작성해보세요.

var x = 5;
var y = 10;

var temp;

// 교환
temp = x;
x = y;
y = temp;

console.log("교환된 x:", x);
console.log("교환된 y:", y);