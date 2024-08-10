//----------  NavBar Open Close -------------------
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

//---------- Slider Navigation -------------------

const slides = document.querySelectorAll('.home .img-slide');
const contents = document.querySelectorAll('.home .content');
const navButtons = document.querySelectorAll('.slider-navigation .nav-btn');

let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 5000; // interval time in milliseconds (5 seconds)

function showSlide(index){

    slides.forEach((slide) => slide.classList.remove('active'));
    contents.forEach((content) => content.classList.remove('active'));

    slides[index].classList.add('active');
    contents[index].classList.add('active');

    navButtons.forEach((btn, i) => btn.classList.remove('active'));
    navButtons[index].classList.add('active');
}

// function to show the next slide
function showNextSlide(){
    currentIndex = (currentIndex + 1) % totalSlides
    showSlide(currentIndex);
}

navButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

showSlide(currentIndex); 

//automatically move to the next slide at the defined interval 
setInterval(showNextSlide,slideInterval);