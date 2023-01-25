

let menu = document.querySelector('.menu-box i')
let nav = document.querySelector('.bottom-nav')
let contentOverlay = document.querySelector('.content-overlay')
menu.addEventListener('click',()=>{
    nav.classList.toggle('toggle-nav')
    contentOverlay.classList.toggle('active-overlay')
    document.body.classList.toggle('no-scroll')
});


let w = document.documentElement.clientWidth
if (w <= 768) {
  contentOverlay.onclick=()=>{
      nav.classList.toggle('toggle-nav')
      contentOverlay.classList.toggle('active-overlay')
      document.body.classList.toggle('no-scroll')
  }
}

window.addEventListener("resize", () => {
  let cw = document.documentElement.clientWidth;
  if (cw <= 768) {
    contentOverlay.onclick=()=>{
      nav.classList.toggle('toggle-nav')
      contentOverlay.classList.toggle('active-overlay')
      document.body.classList.toggle('no-scroll')
    }
  }
});