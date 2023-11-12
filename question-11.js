// 문제 11번 : VSCODE에서 지원하는 JSDoc의 기능을 설명하세요.

// * 자동 완성 (Autocompletion):
// 함수나 객체를 작성할 때 JSDoc 주석을 추가하면 VSCode는 이 정보를 활용하여 더 나은 코드 제안을 제공
/**
 * 두 숫자를 더하는 함수
 *
 * @param {number} a - 첫 번째 숫자
 * @param {number} b - 두 번째 숫자
 * @returns {number} - 두 숫자의 합
 */
function add(a, b) {
  return a + b;
}
// VSCode에서 'b' 매개변수에 대한 정보를 표시함
add(1, /* IntelliSense가 'b' 매개변수에 대한 정보를 표시함 */);



// * 타입 체크
// 정적 타입 체크를 수행하는 데 도움을 줌
/**
 * @type {number}
 */
var myNumber = 42;

/**
 * @param {string} name - 사용자 이름
 * @returns {string} - 환영 메시지
 */
function greet(name) {
  return '안녕하세요, ' + name + '님!';
}



// * 스니펫을 지원
// JSDoc 주석을 더 쉽게 작성할 수 있음
/**
 * 이것은 JSDoc 주석입니다
 */

