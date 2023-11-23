// 문제 79번 : DOM 요소에 이벤트 리스너를 추가하는 코드를 작성하세요. 

// ID가 'myButton'인 버튼 요소 선택
const myButtonElement = document.getElementById('myButton')

// 클릭 이벤트에 대한 이벤트 리스너 추가
myButtonElement.addEventListener('click', function() {
  console.log('Button clicked!');
});
