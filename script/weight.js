const userHeight = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const goals = document.querySelector('#goals');
const btn = document.querySelector('#result');
console.log(userHeight, userWeight, goals, btn); // 확인

// (신장 - 100) * 0.8 계산기
btn.addEventListener('click',function(){
    const result = (Number(userHeight.value) - 100) * 0.9
    console.log(result); // 확인
    const overWeight = Number(userWeight.value) - result;
    console.log(overWeight); // 확인
    goals.value = `적정 체중은 ${result}kg이며 ${overWeight}kg 초과되셨습니다 😉`
})
// 다시하기 버튼
const reset = document.querySelector('#reset');
console.log(reset);
reset.addEventListener('click',function(){
    userHeight.value='';
    userWeight.value='';
    goals.value='';
})