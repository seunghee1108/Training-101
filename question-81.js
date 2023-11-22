//  문제 81번 : Local Storage에 데이터를 저장하고 검색하는 코드를 작성해보세요.

// 데이터 저장 함수
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// 데이터 검색 함수
function getFromLocalStorage(key) {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
}

// 예제 데이터
const userData = {
  username: "example_user",
  email: "user@example.com",
};

// Local Storage에 데이터 저장
saveToLocalStorage("user", userData);

// Local Storage에서 데이터 검색
const retrievedData = getFromLocalStorage("user");

// 결과 출력
if (retrievedData) {
  console.log("Retrieved data:", retrievedData);
} else {
  console.log("Data not found in Local Storage.");
}