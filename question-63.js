// 문제 63번 : JSON 객체를 사용해 JSON 객체로 변환하는 코드를 작성하세요.

const str = `{
	"name" : "방",
	"age" : 28,
	"jobs" : null,
	"habbies" : ["음악감상", "산책"]
}`;

const obj = JSON.parse(str);

console.log(obj);
// { name: '방승희', age: 28, jobs: null, habbies: [ '음악감상', '산책' ] }
