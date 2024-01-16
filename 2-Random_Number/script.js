
const num = document.querySelector('.num');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
      let randomNum = Math.floor(Math.random() * 100);
      num.innerHTML = randomNum;
});