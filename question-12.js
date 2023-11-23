// 문제 12번 : "use strict"는 무엇이고, 어떻게 사용하는지 설명하세요.

//  use strict : JavaScript의 엄격 모드(Strict Mode)를 활성화하는 역할을 함.
// 엄격 모드를 사용하면 코드를 더 안전하고 효율적으로 만들 수 있다. 엄격 모드에서는 몇 가지 JavaScript의 예상치 못한 동작을 방지하고 새로운 기능을 도입한다.

// * JavaScript 파일 또는 스크립트의 맨 위에 추가
"use strict"


// * 함수 내에서만 엄격 모드를 활성화 
function myFunction() {
  "use strict";
  
  // 이 함수는 엄격 모드에서 실행됩니다.
}

//  use strict 가 적용이 안되는 경우
// 1. 변수를  use strict 시작행 이전에 작성한 경우
x = 3.14;
'use strict';
// 2. 단순히 {}를 생성한 임의의 블록 구문일 경우
{
'use strict';
x = 3.14;
}
// 3. 블록 스코프 내부에서
for(ii=0; ii<1; ii++){
	'use strict';
    x = 3.14;
}