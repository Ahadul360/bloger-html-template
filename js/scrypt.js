let menu = document.querySelector('.menu-box')
let nav = document.querySelector('.bottom-nav')
let contentOverlay = document.querySelector('.content-overlay')
let searchIcon = document.querySelector('.search-box')

menu.addEventListener('click',()=>{
  nav.classList.toggle('active-nav')
  contentOverlay.classList.toggle('active-overlay')
  document.body.classList.toggle('no-scroll')
});

contentOverlay.addEventListener('click',()=>{
  nav.classList.toggle('active-nav')
  contentOverlay.classList.toggle('active-overlay')
  document.body.classList.toggle('no-scroll')
})

searchIcon.addEventListener('click',()=>{
  document.querySelector('.search-box form').classList.toggle('show-search-box')
})

// window.addEventListener("resize", () => {
//   let cw = document.documentElement.clientWidth;
//  if(cw > 768){
//     document.body.classList.remove('no-scroll')
//     contentOverlay.classList.remove('active-overlay')
//     nav.classList.remove('active-nav')
//   }
// });