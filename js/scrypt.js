

let menu = document.querySelector('.menu-icon i');
let nav = document.querySelector('.bottom-nav').classList;
menu.addEventListener('click',()=>{
    nav.toggle('toggle-nav');
})