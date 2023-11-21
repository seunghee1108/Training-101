// 문제 71번 : async / await 를 사용해 비동기 코드를 처리하는 목적을 설명하세요.


// 목적: 사용하는 여러 promise의 동작을 동기스럽게 사용할 수 있게 하고, 어떠한 동작을 여러 promise의 그룹에서 간단하게 동작하게 하는 것이다.

async function myName() {
  return "Seunghee";
}

async function showName() {
  const name = await myName();
  console.log(name);
}

// 비동기 함수를 호출할 때는 await을 사용하거나 then을 이용하여 처리한다.
async function main() {
  await showName(); // Seunghee
}

// 또는 then을 사용할 수 있다.
// showName().then(() => console.log("Done"));

// 비동기 코드 실행
main();
