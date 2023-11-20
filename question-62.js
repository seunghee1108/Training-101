// 문제 62번 : JSON 객체를 사용해 JSON 문자열로 변환하는 코드를 작성하세요.

const obj = {
	name : "방",
	age : 28,
	hobbies: [
		"음악감상",
		"산책"
],
	jobs : null
}

const str = JSON.stringify(obj);

console.log(str);
// {"name":"방승희","age":28,"hobbies":["음악감상","산책"],"jobs":null}