let menu = document.querySelector('.menu-box i')
let nav = document.querySelector('.bottom-nav')
let contentOverlay = document.querySelector('.content-overlay')

menu.addEventListener('click',()=>{
  nav.classList.toggle('active-nav')
  contentOverlay.classList.toggle('active-overlay')
  document.body.classList.toggle('no-scroll')
});

contentOverlay.onclick=()=>{
  nav.classList.toggle('active-nav')
  contentOverlay.classList.toggle('active-overlay')
  document.body.classList.toggle('no-scroll')
}

window.addEventListener("resize", () => {
  let cw = document.documentElement.clientWidth;
 if(cw > 768){
    document.body.classList.remove('no-scroll')
    contentOverlay.classList.remove('active-overlay')
    nav.classList.remove('active-nav')
  }
});