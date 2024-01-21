
const btn = document.querySelector('#button');
const result = document.querySelector('.result');

btn.addEventListener('click', checkPallindrome);

function checkPallindrome(e) {

      e.preventDefault();
      let inputStr = document.querySelector('#input-field').value;

      // Checking Pallindrome
      let i = 0, j = inputStr.length;
      while(i <= j) {
            if(inputStr[i] !== inputStr[j-1]) {
                  result.innerHTML = `<span class="word">${inputStr}</span> is not a Pallindrome`;
                  break;
            }
            i++, j--;
      }
      if(i >= j) {
            result.innerHTML =  `<span class="word">${inputStr}</span>  is a Pallindrome`;
      }
}