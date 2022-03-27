const popUp = document.querySelector('.adding-question__form');
const boxs = document.querySelector('.add-exam__btn');
const exit_btn = document.querySelector('.popup-cancel-btn');
const main = document.querySelector('.main');

boxs.addEventListener('click', e => {
  e.preventDefault();
  main.classList.add('blur');
  popUp.style.display = 'flex';
});
exit_btn.addEventListener('click', e => {
  e.preventDefault();
  main.classList.remove('blur');
  popUp.style.display = 'none';
});
