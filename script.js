const menu = document.querySelector('.menu');
const navBar = document.querySelector('.header-navbar');
const main = document.querySelector('.main')
const opacity = document.querySelector('.opacity');
menu.addEventListener('click', changeState)

function changeState(e){
    if (e.target.classList.contains('active')){
        main.classList.toggle('teste')
        navBar.classList.add('navbarOpen')
        e.target.src = 'assets/images/icon-menu-close.svg'
        e.target.classList.remove('active');
        opacity.classList.add('true')
        menu.style.position = 'fixed'
        menu.style.right = '2em'
        menu.style.top = '2em'
    } else{
        navBar.classList.remove('navbarOpen')
        e.target.src = 'assets/images/icon-menu.svg'
        e.target.classList.add('active');
        opacity.classList.remove('true')
        menu.style.position = 'static'

    }
}

