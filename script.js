const menutoggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menutoggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
