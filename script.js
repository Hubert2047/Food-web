var menu = document.getElementById('menu-bars')
var navbar = document.getElementsByClassName('navbar')
menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar[0].classList.toggle('open')
}

//open search menu

var searchMenu = document.getElementsByClassName('search')
var searchBtn = document.getElementById('search-btn')
var searchCloseBtn = document.getElementById('search__close')

searchBtn.onclick = () => {
    searchMenu[0].classList.toggle('open')
}
searchCloseBtn.onclick = () => {
    searchMenu[0].classList.toggle('open')
}

//slider
var sliders = document.querySelectorAll('.slide')
var slideBtnGroup = document.querySelector('.slide__btn-group')
    //add slide__change element
var slideBtnElement = Object.keys(sliders).map(() => {
    return `<div for=" "class=" slide__change "></div>`
})
slideBtnElement.innerHTML = slideBtnElement.join('')

var slideBtns = document.querySelectorAll('.slide__change')
var slide = 0
var slideDelay = 3000
    // add evenlistener for slide__change btn
for (let i = 0; i < slideBtns.length; i++) {

    slideBtns[i].addEventListener('click', () => {
        removeSlide()
        slide = i
        sliders[i].classList.add('active')
        slideBtns[i].classList.add('active')

    })
}
//change slider
function changeSlide() {
    if (slide < sliders.length) {
        removeSlide()
        sliders[slide].classList.add('active')
        slideBtns[slide].classList.add('active')
        slide++
    } else {
        slide = 0
    }

    setTimeout(changeSlide, slideDelay);
}
//remove silder
function removeSlide() {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('active')
        slideBtns[i].classList.remove('active')
    }
}
window.onload = changeSlide()


//swipper for slider card-review
var swiper = new Swiper(".mySwiper", {
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});
// open loader

// function loader() {
//     document.querySelector('.loader').classList.add('fade-out')
// }

// function fadeOut() {
//     setTimeout(loader, 2500)
// }

// window.onload = fadeOut()

//login
const signInBtn = document.getElementById('sign-in-btn ')
console.log(signInBtn);
const signUpBtn = document.getElementById('sign-up-btn ')
console.log(signUpBtn);
const login = document.querySelector('.login')
signUpBtn.addEventListener('click', () => {
    login.classList.add('login__sign-up-mode')
})

signInBtn.addEventListener('click', () => {
    login.classList.remove('login__sign-up-mode')
    console.log('go')
})