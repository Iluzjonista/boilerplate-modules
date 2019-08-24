import './styles/main.scss'

function classToggle() {
    const navs = document.querySelectorAll('.header-nav__Items')
    
    navs.forEach(nav => nav.classList.toggle('header-nav__ToggleShow'));
  }
  
  document.querySelector('.header-nav__Link-toggle')
    .addEventListener('click', classToggle);