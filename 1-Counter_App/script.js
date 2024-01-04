const counter = document.querySelector('.counter');
const add = document.querySelector('.add');
const substract = document.querySelector('.subs');
const reset = document.querySelector('.reset');


let cnt = 0;
add.addEventListener('click', () => {
      cnt = cnt + 1;
      counter.innerText = cnt;
});

substract.addEventListener('click', () => {
      cnt = cnt - 1;
      counter.innerHTML = cnt;
});

reset.addEventListener('click', () => {
      cnt = 0;
      counter.innerHTML = cnt;
})