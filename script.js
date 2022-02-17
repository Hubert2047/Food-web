// when scroll on section navLinks auto active
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.navbar__link')
window.onscroll = () => {
        sections.forEach((section) => {
            let top = window.scrollY
            let height = section.offsetHeight
            let offset = section.offsetTop
            let id = section.getAttribute('id')
                // tru di 100 de cho ngay khi den phan section do là lập tức chuyển
            if (top >= offset - 100 && top <= offset + height) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove('active')
                })
                document.querySelector('.navbar__items [href*=' + id + ']').classList.add('active')
            }

        })
    }
    //open navbar on small screens
const menu = document.querySelector('#menu-bars')
const navbar = document.getElementById('navbar')
let navbarBtns = [...navLinks]
navbarBtns.push(menu)

navbarBtns.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        menu.classList.toggle('fa-times')
        navbar.classList.toggle('open')
    })
})

//open search menu

const searchMenu = document.getElementsByClassName('search')
const searchBtn = document.getElementById('search-btn')
const searchCloseBtn = document.getElementById('search__close')

searchBtn.onclick = () => {
    searchMenu[0].classList.toggle('open')
}
searchCloseBtn.onclick = () => {
    searchMenu[0].classList.toggle('open')
}

//slider
const sliders = document.querySelectorAll('.slide')
const slideBtnGroup = document.querySelector('.slide__btn-group')
    //add slide__change element
const slideBtnElement = Object.keys(sliders).map(() => {
    return `<div for=" "class=" slide__change "></div>`
})
slideBtnElement.innerHTML = slideBtnElement.join('')

const slideBtns = document.querySelectorAll('.slide__change')
let slide = 0
const slideDelay = 3000
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
const swiper = new Swiper(".mySwiper", {
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


//login change mode
const signInBtn = document.getElementById('sign-in-btn ')
const signUpBtn = document.getElementById('sign-up-btn ')
const loginElm = document.querySelector('.login')
signUpBtn.addEventListener('click', () => {
    loginElm.classList.add('login__sign-up-mode')
})

signInBtn.addEventListener('click', () => {
    loginElm.classList.remove('login__sign-up-mode')
})

// check account
const accounts = [{
    name: 'hubert',
    image: 'images/hubert.jpg',
    notification: 3,
    message: 10,
    userAccount: 'admin',
    userPassword: 'admin',
    cartItems: 3
}]
const loginBtn = document.querySelector('#login__btn')

loginBtn.addEventListener('click', () => {
    const inputAccount = document.querySelector('#account').value
    const inputPassword = document.querySelector('#password').value
    const navUser = document.querySelector('#nav-user')
    let isSuccess = accounts.find((account) => {
        const isExsit = account.userAccount == inputAccount && account.userPassword == inputPassword
        if (isExsit == true) {
            navUser.innerHTML = `
            <div class="nav-user__icons" id='nav-user'>
            <a >
                <i class="fa-solid fa-bell  nav-user__icon">
                    <span>${account.notification}</span>
                </i>
            </a>
            <a >
                <i class="fa fa-message nav-user__icon">
                    <span>${account.message}</span>
                </i>
            </a>
            <a   id="shopping-cart">
                <i class=" fas fa-shopping-cart nav-user__icon">
                <span>${account.cartItems}</span>
                </i>
            </a>

            </div>

            <img src="${account.image}" id="user" class="nav-user__photo" alt="">

            <div class="nav-user__name"><span>${account.name}</span></div>`

            loginElm.classList.remove('active')
        }
        return isExsit
    })
    if (!isSuccess) {
        alert('Password or Account Error')
    }


})


// open login 

const openLoginBtns = []
const shoppingCart = document.querySelector('#shopping-cart')
const user = document.querySelector('#user')
openLoginBtns.push(user)
openLoginBtns.push(shoppingCart)
openLoginBtns.forEach((openLoginBtn) => {
    openLoginBtn.addEventListener('click', () => {
        loginElm.classList.add('active')
    })
})

// add validation into input form
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.classList.add('invalid')
    })
});

//add open-close open eye on login
const passwordEyes = document.querySelectorAll('.login__eye')
    // console.log(passwordEyes);
passwordEyes.forEach((passwordEye) => {
    passwordEye.addEventListener('click', () => {
        let id = passwordEye.getAttribute('id')
            // console.log(id);
        let currentInput = document.querySelector(`#${id}+.login__input`)
        if (currentInput.type === 'password') {
            currentInput.type = 'text'
            passwordEye.className = 'fa fa-eye-slash login__input-icon login__eye '
        } else {
            currentInput.type = 'password'
            passwordEye.className = 'fas fa-eye login__input-icon login__eye '
        }
    })
})