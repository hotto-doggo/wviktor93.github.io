//burgermenue
const burgerButton = document.querySelector(".burger");
const burgerButton2 = document.querySelector(".burger-nav__button");
const burgerMenu = document.querySelector(".burger-nav");

document.addEventListener('click', openCloseBurger);
function openCloseBurger(event) {
    if (event.target !== burgerMenu && burgerMenu.classList.contains("active") && !event.target.closest('.burger-nav__list')) {
        burgerMenu.classList.remove("active");
        burgerButton.classList.remove("active");
    } else if (event.target.closest('.burger') || event.target === burgerButton2) {
        burgerMenu.classList.toggle("active");
        burgerButton.classList.toggle("active");
    }
}

// burgerButton.addEventListener('click', toggleBurgerMenu);
// burgerButton2.addEventListener('click', toggleBurgerMenu);
// function toggleBurgerMenu() {
//     burgerMenu.classList.toggle("active");
//     burgerButton.classList.toggle("active");
// }

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
    let topVisible;

    topVisible = coords.top > 600 && coords.top < windowHeight;
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
let isFirstUsageHelm = true;

positionsHelm.forEach((item) => {
    item.addEventListener('click', FirstUsageHelm);
});

function FirstUsageHelm() {
    isFirstUsageHelm = false;
}

positionsVis.forEach((item) => {
    item.addEventListener('click', firstDefaultVis);
});
positionsHold.forEach((item) => {
    item.addEventListener('click', firstDefaultHold);
});

function firstDefaultVis() {
    if (isFirstUsageVis === true && isFirstUsageHold === true && document.documentElement.clientWidth >= 650 && isFirstUsageHelm === true) {
        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        this.classList.add('active');

        constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
        buyCartLeftHelm.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHelm.forEach((item) => { item.classList.remove('active'); });
        buyCartLeftHelm.forEach((item) => { item.classList.remove('active'); });
        constructorHelm[0].classList.add('active');
        buyCartLeftHelm[0].classList.add('active');
        document.querySelectorAll(".choose__price-position.helmet").forEach((item) => { item.innerHTML = document.querySelector(".choose__positions-helmet-name.helmet1").innerHTML });
        positionsHelm.forEach((item) => {
            item.classList.remove('active');
        });
        positionsHelm[0].classList.add('active');


        constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
        buyCartLeftHold.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHold.forEach((item) => { item.classList.remove('active'); });
        buyCartLeftHold.forEach((item) => { item.classList.remove('active'); });
        constructorHold[0].classList.add('active');
        buyCartLeftHold[0].classList.add('active');
        document.querySelectorAll(".choose__price-position.holder").forEach((item) => { item.innerHTML = document.querySelector(".choose__positions-holder-name.holder1").innerHTML; });



        positionsHold.forEach((item) => {
            item.classList.remove('active');
        });
        positionsHold[0].classList.add('active');

        const currHelmID = this.id;
        console.log(currHelmID);
        document.getElementById('choice-' + currHelmID).classList.add('active');
        document.getElementById('choice-' + currHelmID + '_buy-cart').classList.add('active');
    }
    isFirstUsageVis = false;
}

function firstDefaultHold() {
    if (isFirstUsageVis === true && isFirstUsageHold === true) {
        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        this.classList.add('active');

        constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
        buyCartLeftHelm.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHelm.forEach((item) => { item.classList.remove('active'); });
        buyCartLeftHelm.forEach((item) => { item.classList.remove('active'); });
        constructorHelm[0].classList.add('active');
        buyCartLeftHelm[0].classList.add('active');
        document.querySelectorAll(".choose__price-position.helmet").forEach((item) => {
            item.innerHTML = document.querySelector(".choose__positions-helmet-name.helmet1").innerHTML;
        });

        positionsHelm.forEach((item) => {
            item.classList.remove('active');
        });
        positionsHelm[0].classList.add('active');


        constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
        buyCartLeftVis.forEach((item) => { item.classList.add('choose-mod'); });
        constructorVis.forEach((item) => { item.classList.remove('active'); });
        buyCartLeftVis.forEach((item) => { item.classList.remove('active'); });
        constructorVis[0].classList.add('active');
        buyCartLeftVis[0].classList.add('active');
        document.querySelectorAll(".choose__price-position.visor").forEach((item) => {
            item.innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
        });


        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        positionsVis[0].classList.add('active');

        const currHelmID = this.id;
        console.log(currHelmID);
        document.getElementById('choice-' + currHelmID).classList.add('active');
        document.getElementById('choice-' + currHelmID + '_buy-cart').classList.add('active');
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

    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHelm.forEach((item) => { item.classList.remove('active'); });
    buyCartLeftHelm.forEach((item) => { item.classList.remove('active'); });



    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftVis.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('active'); });
    buyCartLeftVis.forEach((item) => { item.classList.remove('active'); });
    constructorVis[0].classList.add('active');
    buyCartLeftVis[0].classList.add('active');
    document.querySelectorAll(".choose__price-position.visor").forEach((item) => {
        item.innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
    });

    positionsVis.forEach((item) => {
        item.classList.remove('active');
    });
    positionsVis[0].classList.add('active');



    constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftHold.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHold.forEach((item) => { item.classList.remove('active'); });
    buyCartLeftHold.forEach((item) => { item.classList.remove('active'); });
    constructorHold[0].classList.add('active');
    buyCartLeftHold[0].classList.add('active');
    document.querySelectorAll(".choose__price-position.holder").forEach((item) => {
        item.innerHTML = document.querySelector(".choose__positions-holder-name.holder1").innerHTML;
    });
    positionsHold.forEach((item) => {
        item.classList.remove('active');
    });
    positionsHold[0].classList.add('active');

    const currHelmID = this.id;
    console.log(currHelmID);
    document.getElementById('choice-' + currHelmID).classList.add('active');
    document.getElementById('choice-' + currHelmID + '_buy-cart').classList.add('active');
    document.querySelectorAll(".choose__price-position.helmet").forEach((item) => {
        item.innerHTML = document.querySelector(".choose__positions-helmet-name" + "." + currHelmID).innerHTML;
    });
}
function toggleActiveVis() {
    positionsVis.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('active'); });
    buyCartLeftVis.forEach((item) => { item.classList.remove('active'); });
    constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftHold.forEach((item) => { item.classList.add('choose-mod'); });
    const currHelmID = this.id;
    console.log(currHelmID);
    document.getElementById('choice-' + currHelmID).classList.add('active');
    document.getElementById('choice-' + currHelmID + '_buy-cart').classList.add('active');
    document.querySelectorAll(".choose__price-position.visor").forEach((item) => {
        item.innerHTML = document.querySelector(".choose__positions-visor-name" + "." + currHelmID).innerHTML;
    });
}
function toggleActiveHold() {
    positionsHold.forEach((item) => {
        item.classList.remove('active');
    });
    this.classList.add('active');
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftVis.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
    buyCartLeftHold.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHold.forEach((item) => { item.classList.remove('active'); });
    buyCartLeftHold.forEach((item) => { item.classList.remove('active'); });
    const currHelmID = this.id;
    console.log(currHelmID);
    document.getElementById('choice-' + currHelmID).classList.add('active');
    document.getElementById('choice-' + currHelmID + '_buy-cart').classList.add('active');
    document.querySelectorAll(".choose__price-position.holder").forEach((item) => {
        item.innerHTML = document.querySelector(".choose__positions-holder-name" + "." + currHelmID).innerHTML;
    });
}


// if (document.documentElement.clientWidth <= 650) {
//     positionsHelm.forEach((item) => {
//         item.classList.remove('active');
//     });
//     positionsHelm[0].classList.add('active');
//     // constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
//     constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
//     constructorHelm.forEach((item) => { item.classList.remove('active'); });
//     // constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
//     constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
//     constructorVis.forEach((item) => { item.classList.remove('active'); });
//     constructorVis[0].classList.add('active');
//     document.querySelector(".choose__price-position.visor").innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
//     positionsVis.forEach((item) => {
//         item.classList.remove('active');
//     });
//     positionsVis[0].classList.add('active');
//     // constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
//     constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
//     document.getElementById('choice-' + positionsHelm[0].id).classList.add('active');
//     document.querySelector(".choose__price-position.helmet").innerHTML = document.querySelector(".choose__positions-helmet-name" + "." + currHelmID).innerHTML;
// }



// button "up" animation

const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', showHideButtonUp);
function showHideButtonUp() {
    if (pageYOffset >= 200 && document.documentElement.clientWidth > 650) {
        buttonUp.classList.add('show');
        buttonUp.classList.remove('hide');
    } else {
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
        document.querySelector(".footer__socialmedia").after(buttonUp);
    } else {
        document.querySelector(".main .container").append(mainImg);
        document.querySelector(".burger").after(buttonUp);
    }
}

mobileResizing();




//mobile steps slider

let isChosenFlag1 = false;
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
        buyCartLeftHelm.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHelm.forEach((item) => { item.classList.remove('active'); });
        buyCartLeftHelm.forEach((item) => { item.classList.remove('active'); });
        constructorHelm[0].classList.add('active');
        buyCartLeftHelm[0].classList.add('active');
        document.querySelectorAll(".choose__price-position.helmet").forEach((item) => {
            item.innerHTML = document.querySelector(".choose__positions-helmet-name.helmet1").innerHTML;
        });
        constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
        buyCartLeftVis.forEach((item) => { item.classList.add('choose-mod'); });
        constructorVis.forEach((item) => { item.classList.remove('active'); });
        buyCartLeftVis.forEach((item) => { item.classList.remove('active'); });
        constructorVis[0].classList.add('active');
        buyCartLeftVis[0].classList.add('active');
        document.querySelectorAll(".choose__price-position.visor").forEach((item) => {
            item.innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
        });
        positionsVis.forEach((item) => {
            item.classList.remove('active');
        });
        positionsVis[0].classList.add('active');

        constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
        buyCartLeftHold.forEach((item) => { item.classList.add('choose-mod'); });
        constructorHold.forEach((item) => { item.classList.remove('active'); });
        buyCartLeftHold.forEach((item) => { item.classList.remove('active'); });
        constructorHold[0].classList.add('active');
        buyCartLeftHold[0].classList.add('active');
        document.querySelectorAll(".choose__price-position.holder").forEach((item) => {
            item.innerHTML = document.querySelector(".choose__positions-holder-name.holder1").innerHTML;
        });
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

let images = document.querySelectorAll('div')
let imagesTotalCount = images.length;
let imagesLoadedCount = 0;
let preloader = document.getElementById('preloader');
let percLine = document.getElementById('preloader__line');

for (let i = 0; i < imagesTotalCount; i++) {

    try {
        imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        if (images[i].src == undefined) {
            imageClone.src = 'img/BG.png';
        } else {
            imageClone.src = images[i].src;
        }
    } catch (e) {
        console.log('exception')
    }


}

function imageLoaded() {
    imagesLoadedCount++;
    percLine.style.width = ((100 / imagesTotalCount) * imagesLoadedCount << 0) + '%';

    if (imagesLoadedCount >= imagesTotalCount) {
        setTimeout(function () {
            preloader.classList.add('done');
        }, 1000);
    }
}




//buy cart copy positions

window.addEventListener("resize", buyCartCopyPositions);

function buyCartCopyPositions() {
    const buyCartLeft = document.querySelector('.buy-helmet__choice');
    const buyCartRight = document.querySelector('.buy-helmet__specifics-button');
    if (document.documentElement.clientWidth > 1024) {
        buyCartLeft.innerHTML = '';
        buyCartRight.innerHTML = '';
        const buyCartRightHeading = document.createElement('div');
        buyCartRightHeading.classList.add('buy-helmet__specifics-button-heading');
        buyCartRightHeading.innerHTML = 'Buy Helmet';
        buyCartRight.append(buyCartRightHeading);


        const buyCartLeftContent = document.querySelector('.choose__slider-price');
        const buyCartLeftContentClone = buyCartLeftContent.cloneNode(true);
        buyCartLeft.append(buyCartLeftContentClone);

        const buyCartLeftTotalPrice = document.querySelector('.buy-helmet__choice .choose__total-price');
        buyCartRight.append(buyCartLeftTotalPrice);

        const buyCartRightContent = document.querySelector('.sizes__buttons');
        const buyCartRightContentClone = buyCartRightContent.cloneNode(true);
        buyCartRight.append(buyCartRightContentClone);

        const buyCartLeftBuyButton = document.querySelector('.buy-helmet__choice .choose__buy-button-container');
        buyCartRight.append(buyCartLeftBuyButton);
        document.querySelector('.buy-helmet__choice .choose__buy-text').remove()

        document.querySelector('.buy-helmet__specifics-button .choose__buy-button').innerHTML = "ADD TO CART";
    } else if (document.documentElement.clientWidth <= 1024) {
        buyCartLeft.innerHTML = '';
        buyCartRight.innerHTML = '';
        const buyCartRightHeading = document.createElement('div');
        buyCartRightHeading.classList.add('buy-helmet__specifics-button-heading');
        buyCartRightHeading.innerHTML = 'Buy Helmet';
        buyCartRight.append(buyCartRightHeading);


        const buyCartLeftContent = document.querySelector('.choose__slider-price');
        const buyCartLeftContentClone = buyCartLeftContent.cloneNode(true);
        buyCartLeft.append(buyCartLeftContentClone);

        const buyCartLeftContentPrices = document.querySelector('.choose__prices');
        const buyCartLeftContentPricesClone = buyCartLeftContentPrices.cloneNode(true);
        buyCartLeft.append(buyCartLeftContentPricesClone);

        const buyCartLeftTotalPrice = document.querySelector('.buy-helmet__choice .choose__total-price');
        buyCartRight.append(buyCartLeftTotalPrice);

        const buyCartRightContent = document.querySelector('.sizes__buttons');
        const buyCartRightContentClone = buyCartRightContent.cloneNode(true);
        buyCartRight.append(buyCartRightContentClone);

        const buyCartLeftBuyButton = document.querySelector('.buy-helmet__choice .choose__buy-button-container');
        buyCartRight.append(buyCartLeftBuyButton);
        document.querySelector('.buy-helmet__choice .choose__buy-text').remove()

        document.querySelector('.buy-helmet__specifics-button .choose__buy-button').innerHTML = "ADD TO CART";
    }

}

buyCartCopyPositions();



// buy button open chart

const buyCart = document.querySelector('.buy-helmet');

const buyButton = document.querySelector('.choose .choose__buy-button-container');
buyButton.addEventListener('click', toggleActiveCart)

const closeCartButton = document.querySelector('.buy-helmet .burger-nav__button');
closeCartButton.addEventListener('click', toggleActiveCart)

function toggleActiveCart() {
    buyCart.classList.toggle('active');
}






//change buy cart helmet


const buyCartLeftHelm = document.querySelectorAll('.buy-helmet__choice .choose__slider-helmet');

buyCartLeftHelm.forEach((item) => {
    const currID = item.id;
    item.id = currID + '_buy-cart';
})

const buyCartLeftVis = document.querySelectorAll('.buy-helmet__choice .choose__slider-visor');

buyCartLeftVis.forEach((item) => {
    const currID = item.id;
    item.id = currID + '_buy-cart';
})

const buyCartLeftHold = document.querySelectorAll('.buy-helmet__choice .choose__slider-holder');

buyCartLeftHold.forEach((item) => {
    const currID = item.id;
    item.id = currID + '_buy-cart';
})