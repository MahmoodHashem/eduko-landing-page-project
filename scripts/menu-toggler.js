


const toggleBtn = document.querySelector('.navbar-mobile__toggle');
const panel = document.querySelector('.navbar-mobile__panel');
const triggerIcon = document.querySelector('.navbar-mobile__trigger');


toggleBtn.addEventListener('click', () => {
  panel.classList.toggle('navbar-mobile__panel--active');
  triggerIcon.classList.toggle('is-active');
});

