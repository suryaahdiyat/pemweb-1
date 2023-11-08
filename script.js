const humberger_menu = document.querySelector(".humberger-menu")
const navbar = document.querySelector("nav")
humberger_menu.addEventListener("click", ()=> {
    humberger_menu.classList.toggle("active")
    navbar.classList.toggle("active")
})

// window.onscroll = function() {
//   const scrollPosition = window.scrollY || window.pageYOffset;
//   console.log('Posisi scroll vertikal: ' + scrollPosition + 'px');
// };