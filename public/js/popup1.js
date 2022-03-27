const btn = document.querySelector('.exit-btn');
const courseExam_ist = document.querySelector('.courseExam-list');
const popUp = document.querySelector('.pop-up');
const boxs = document.querySelectorAll('.box');

boxs.forEach(box => {
  box.addEventListener('click', () => {
    courseExam_ist.classList.add('blur');
    popUp.style.display = 'flex';
  });
});

btn.addEventListener('click', e => {
  // e.preventDefault();
  courseExam_ist.classList.remove('blur');
  popUp.style.display = 'none';
});
