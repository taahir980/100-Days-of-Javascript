
const cnt = document.querySelector('.count');
const buttons = document.querySelector('.buttons');


// Event Delegation

buttons.addEventListener('click', (e) => {
      if(e.target.classList.contains("add")) {
            cnt.innerHTML++;
            setColor();
      }
      if(e.target.classList.contains("substract")) {
            cnt.innerHTML--;
            setColor();
      }
      if(e.target.classList.contains("reset")) {
            cnt.innerHTML = 0;
            setColor();
      }
});

function setColor() {
      if(cnt.innerHTML < 0) {
            cnt.style.color = "yellow";
      }
      else {
            cnt.style.color = "#fff";
      }
}
