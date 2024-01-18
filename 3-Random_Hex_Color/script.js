
function generateHexCode() {
      const hexVals = "0123456789ABCDEF";
      let hexCode = "#";
      for(let i = 0; i<6; i++) {
            hexCode += hexVals[Math.floor(Math.random()*16)];
      }
      return hexCode;
}

const button = document.querySelector('.button');
const body = document.querySelector('body');
const val = document.querySelector('.hex-code');

button.addEventListener('click', () => {
      let color = generateHexCode();
      val.innerHTML = color;
      body.style.backgroundColor = color;
});