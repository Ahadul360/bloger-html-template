

let menu = document.querySelector('.menu-box i');
let nav = document.querySelector('.bottom-nav');
let contentOverlay = document.querySelector('.content-overlay');
menu.addEventListener('click',()=>{
    nav.classList.toggle('toggle-nav');
    contentOverlay.classList.toggle('active-overlay');
});

let w = document.documentElement.clientWidth;
  if (w <= 768) {
    contentOverlay.onclick=()=>{
        nav.classList.toggle('toggle-nav');
        contentOverlay.classList.toggle('active-overlay');
    }
  }