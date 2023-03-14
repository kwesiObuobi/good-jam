const menuIcon = document.querySelectorAll('.hamburgur');

menuIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

// menuIcon.addEventListener('click', () => {
//   document.querySelector('.mobile-nav').style.display = 'flex';
//   document.body.style.overflow = 'hidden';
// });

const closeMenu = () => {
  document.querySelector('.mobile-nav').style.display = 'none';
  document.body.style.overflow = 'scroll';
};

closeMenu();
