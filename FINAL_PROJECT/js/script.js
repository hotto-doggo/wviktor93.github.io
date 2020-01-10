//burgermenue
const burgerButton = document.querySelector(".burger");
const burgerButton2 = document.querySelector(".burger-nav__button");

burgerButton.addEventListener('click', toggleBurgerMenu);
burgerButton2.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    const burgerMenu = document.querySelector(".burger-nav");
    burgerMenu.classList.toggle("active");
    burgerButton.classList.toggle("active");
}

//all onscroll start-animation

const prevAnimation = document.querySelectorAll(".start-animation");
let isScrolling = false;

// window.addEventListener('scroll', startAnimation, false)
// function startAnimation(event) {
//     if (isScrolling == false) {
//         prevAnimation.forEach((item) => { item.classList.add('preview-animate'); })
//     }
//     isScrolling = true;
// }


// window.addEventListener('scroll', startAnimation, false)
// function startAnimation(event) {
//     if (isScrolling == false && this.getBoundingClientRect() === pageYOffset) {
//         prevAnimation.forEach((item) => { item.classList.add('preview-animate'); })
//     }
//     isScrolling = true;
// }

// prevAnimation.forEach((item) => { item.addEventListener('scroll', startAnimation, false); })
// function startAnimation(event) {
//     console.log(this.getBoundingClientRect());
//     console.log(pageYOffset);
//     if (this.getBoundingClientRect() === pageYOffset) {
//         prevAnimation.forEach((item) => { item.classList.add('preview-animate'); })
//     }
// }

function isVisible(elem) {

    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    // видны верхний ИЛИ нижний край элемента
    let topVisible = coords.top > 600 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}



function showVisible() {
    for (let i = 0; i < prevAnimation.length; i++) {
        if (isVisible(prevAnimation[i])) {
            prevAnimation[i].classList.add('preview-animate')
        }
    }
}

window.addEventListener('scroll', showVisible);
showVisible();






//toggle constructor positions

const positionsHelm = document.querySelectorAll(".choose__positions-helmet");
const positionsVis = document.querySelectorAll(".choose__positions-visor");
const positionsHold = document.querySelectorAll(".choose__positions-holder");

const constructorHelm = document.querySelectorAll('.choose__slider-helmet');
const constructorVis = document.querySelectorAll('.choose__slider-visor');
const constructorHold = document.querySelectorAll('.choose__slider-holder');

let isFirstUsageVis = true;
let isFirstUsageHold = true;

positionsVis.forEach((item) => {
    item.addEventListener('click', firstDefaultVis);
});
positionsHold.forEach((item) => {
    item.addEventListener('click', firstDefaultHold);
});

function firstDefaultVis() {
    if (isFirstUsageVis === true && isFirstUsageHold === true && document.documentElement.clientWidth >= 650) {
        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        // constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
        constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHelm.forEach((item) => { item.classList.remove('active'); });
        constructorHelm[0].classList.add('active');
        document.querySelector(".choose__price-position.helmet").innerHTML = document.querySelector(".choose__positions-helmet-name.helmet1").innerHTML;
        positionsHelm.forEach((item) => {
            item.classList.remove('active');
        });
        positionsHelm[0].classList.add('active');


        // constructorHold.forEach((item) => { item.classList.remove('preview-animate'); });
        constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHold.forEach((item) => { item.classList.remove('active'); });
        constructorHold[0].classList.add('active');
        document.querySelector(".choose__price-position.holder").innerHTML = document.querySelector(".choose__positions-holder-name.holder1").innerHTML;
        positionsHold.forEach((item) => {
            item.classList.remove('active');
        });
        positionsHold[0].classList.add('active');

        const currHelmID = this.id;
        console.log(currHelmID);
        document.getElementById('choice-' + currHelmID).classList.add('active');
    }
    isFirstUsageVis = false;
}

function firstDefaultHold() {
    if (isFirstUsageVis === true && isFirstUsageHold === true) {
        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        // constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
        constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHelm.forEach((item) => { item.classList.remove('active'); });
        constructorHelm[0].classList.add('active');
        document.querySelector(".choose__price-position.helmet").innerHTML = document.querySelector(".choose__positions-helmet-name.helmet1").innerHTML;
        positionsHelm.forEach((item) => {
            item.classList.remove('active');
        });
        positionsHelm[0].classList.add('active');


        // constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
        constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
        constructorVis.forEach((item) => { item.classList.remove('active'); });
        constructorVis[0].classList.add('active');
        document.querySelector(".choose__price-position.visor").innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        positionsVis[0].classList.add('active');

        const currHelmID = this.id;
        console.log(currHelmID);
        document.getElementById('choice-' + currHelmID).classList.add('active');
    }
    isFirstUsageHold = false;
}

positionsHelm.forEach((item) => {
    item.addEventListener('click', toggleActiveHelm);
});
positionsVis.forEach((item) => {
    item.addEventListener('click', toggleActiveVis);
});
positionsHold.forEach((item) => {
    item.addEventListener('click', toggleActiveHold);
});

function toggleActiveHelm() {
    positionsHelm.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
    // constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHelm.forEach((item) => { item.classList.remove('active'); });
    // constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('active'); });
    constructorVis[0].classList.add('active');
    document.querySelector(".choose__price-position.visor").innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
    positionsVis.forEach((item) => {
        item.classList.remove('active');
    });
    positionsVis[0].classList.add('active');
    // constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
    constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
    const currHelmID = this.id;
    console.log(currHelmID);
    document.getElementById('choice-' + currHelmID).classList.add('active');
    document.querySelector(".choose__price-position.helmet").innerHTML = document.querySelector(".choose__positions-helmet-name" + "." + currHelmID).innerHTML;
}
function toggleActiveVis() {
    positionsVis.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
    // constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    // constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('active'); });
    // constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
    constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
    const currHelmID = this.id;
    console.log(currHelmID);
    document.getElementById('choice-' + currHelmID).classList.add('active');
    document.querySelector(".choose__price-position.visor").innerHTML = document.querySelector(".choose__positions-visor-name" + "." + currHelmID).innerHTML;
}
function toggleActiveHold() {
    positionsHold.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
    // constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    // constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    // constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
    constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHold.forEach((item) => { item.classList.remove('active'); });
    const currHelmID = this.id;
    console.log(currHelmID);
    document.getElementById('choice-' + currHelmID).classList.add('active');
    document.querySelector(".choose__price-position.holder").innerHTML = document.querySelector(".choose__positions-holder-name" + "." + currHelmID).innerHTML;
}

// button "up" animation

const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', showHideButtonUp);
function showHideButtonUp() {
    if (pageYOffset >= 200) {
        // buttonUp.style.animation = 'show-button-up .5s ease-out 1';
        buttonUp.classList.add('show');
        buttonUp.classList.remove('hide');
    } else {
        // buttonUp.style.animation = 'hide-button-up .5s ease-out 1';
        buttonUp.classList.remove('show');
        buttonUp.classList.add('hide');
    }
}

showHideButtonUp();






// resizing transformation


window.addEventListener("resize", chooseResizing);

function chooseResizing() {
    const totalPrice = document.querySelector(".choose__prices");
    const chooseHeading = document.querySelector(".choose__positions-heading-wrapper");
    const featuresNote = document.querySelector(".features__description-note-wrapper");
    if (document.documentElement.clientWidth <= 1024) {
        document.querySelector(".choose .container").append(totalPrice);
        document.querySelector(".choose .container").prepend(chooseHeading);
        document.querySelector(".features__evolution").after(featuresNote);
    } else {
        document.querySelector(".choose__slider-price").append(totalPrice);
        document.querySelector(".choose__positions").prepend(chooseHeading);
        document.querySelector(".features__description").append(featuresNote);
    }
}

chooseResizing();

window.addEventListener("resize", mobileResizing);

function mobileResizing() {
    const mainImg = document.querySelector(".main__img-button");

    if (document.documentElement.clientWidth <= 650) {
        document.querySelector(".main__text-descript").after(mainImg);
    } else {

        document.querySelector(".main .container").append(mainImg);
    }
}

mobileResizing();




//mobile steps slider

const isChosenFlag1 = false;
positionsHelm.forEach((item) => {
    item.addEventListener('click', changeFlag1);
});

function changeFlag1() {
    isChosenFlag1 = true;
}

const step1 = document.querySelector('.choose__positions-button-container.step1');

step1.addEventListener('click', toStep2);

function toStep2() {
    if (isChosenFlag1 === false) {
        constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHelm.forEach((item) => { item.classList.remove('active'); });
        constructorHelm[0].classList.add('active');
        document.querySelector(".choose__price-position.helmet").innerHTML = document.querySelector(".choose__positions-helmet-name.helmet1").innerHTML;
        // constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
        constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
        constructorVis.forEach((item) => { item.classList.remove('active'); });
        constructorVis[0].classList.add('active');
        document.querySelector(".choose__price-position.visor").innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        positionsVis[0].classList.add('active');
        // constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
        constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHold.forEach((item) => { item.classList.remove('active'); });
        constructorHold[0].classList.add('active');
        document.querySelector(".choose__price-position.holder").innerHTML = document.querySelector(".choose__positions-holder-name.holder1").innerHTML;
        positionsHold.forEach((item) => {
            item.classList.remove('active');
        });
        positionsHold[0].classList.add('active');
    }
    document.querySelector('.choose__positions-helmets').classList.toggle('mobile_step_show');
    document.querySelector('.choose__positions-visors').classList.toggle('mobile_step_show');
    document.querySelector('.choose__positions-wrapper').style.transform = 'translateX(0%)'
}

const step2 = document.querySelector('.choose__positions-button-container.step2');

step2.addEventListener('click', toStep3);

function toStep3() {
    document.querySelector('.choose__positions-visors').classList.toggle('mobile_step_show');
    document.querySelector('.choose__positions-holders').classList.toggle('mobile_step_show');
    document.querySelector('.choose__positions-wrapper').style.transform = 'translateX(-30%)'
}




// preloader

// document.body.onload = function () {

//     setTimeout(function () {

//         if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//         }
//     }, 1000);
// }


let images = document.images;
let imagesTotalCount = images.length;
let imagesLoadedCount = 0;
let preloader = document.getElementById('preloader');
let percLine = document.getElementById('preloader__line');

for (let i = 0; i < imagesTotalCount; i++) {
    imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
}

function imageLoaded() {
    imagesLoadedCount++;
    percLine.style.width = ((100 / imagesTotalCount) * imagesLoadedCount << 0) + '%';

    if (imagesLoadedCount >= imagesTotalCount) {
        setTimeout(function () {

            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 1000);
    }
}