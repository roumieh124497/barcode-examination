const menu = document.querySelector('.menu');
const imgBtn = document.querySelector('.img-button');

imgBtn.addEventListener('click', () => {
  menu.classList.toggle('menuVisible');
});
