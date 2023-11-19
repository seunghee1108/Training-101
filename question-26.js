// 문제 26번 : swith 문을 사용해 변수가 어떤 값인지 분기하는 코드를 작성하세요.

// switch문은 조건문은 두 개이상의 조건을 비교할 때 사용하여 if else if와 유사하다.
// 
let num = 100;  // 변수의 값

switch (num) {
    case 1 :
        console.log("1을 선택");
        break;
    case 2 :
        console.log("2을 선택");
        break;
    // case 100 :
    //     console.log("100을 선택");  // 100을 선택
    //     break;
    default:
        console.log("선택하지 않음");
}
