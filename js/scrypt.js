

let menu = document.querySelector('.menu-box i');
let nav = document.querySelector('.bottom-nav').classList;
menu.addEventListener('click',()=>{
    nav.toggle('toggle-nav');
})