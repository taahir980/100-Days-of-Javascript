
const btn = document.querySelector('#btn');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

btn.addEventListener('click', openPopup);
close.addEventListener('click', closePopup);
modal.addEventListener('click', closePopup);

function openPopup(e) {
      e.preventDefault();
      modal.style.display = 'block';
}

function closePopup() {
      modal.style.display = 'none';
}