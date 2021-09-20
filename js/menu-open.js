let menuClick = document.querySelector(".nav-toggle")
let menuOpened = document.querySelector(".nav")
const menuCloseClick = menuOpened.querySelectorAll(".scrollLink");

function menuOpen () {
	menuOpened.classList.toggle("active");
	menuClick.classList.toggle("open")
}
menuClick.addEventListener("click" , menuOpen);

menuCloseClick.forEach ( listClick  => {
	listClick.addEventListener("click", menuOpen)
})