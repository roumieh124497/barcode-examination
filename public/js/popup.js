const btn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const popUp = document.querySelector('.pop-up');
const boxs = document.querySelectorAll('.box');

boxs.forEach(box => {
  box.addEventListener('click', () => {
    main.classList.add('blur');
    popUp.style.display = 'flex';
  });
});

btn.addEventListener('click', e => {
  // e.preventDefault();
  main.classList.remove('blur');
  popUp.style.display = 'none';
});
