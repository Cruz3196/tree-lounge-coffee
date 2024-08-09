// NavBar Open Close 
const body = document.querySelector('body'),
    navMenu = body.querySelector('.menu-content'),
    navOpenBtn = body.querySelector('.navOpen-btn'),
    navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        body.style.overflowY = 'hidden';
    })
}

if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll"; 
    })
}

// Swiper js 
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    //grabCursor: true,
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});