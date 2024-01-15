const counter = document.querySelector('.counter');
const add = document.querySelector('.add');
const substract = document.querySelector('.subs');
const reset = document.querySelector('.reset');



add.addEventListener('click', () => {
      counter.innerHTML++;
});

substract.addEventListener('click', () => {
      counter.innerHTML--;
});

reset.addEventListener('click', () => {
      counter.innerHTML = 0;
})