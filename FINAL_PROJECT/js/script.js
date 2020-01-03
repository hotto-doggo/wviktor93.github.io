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

window.addEventListener('scroll', startAnimation, false)
function startAnimation (event){
    if (isScrolling == false ) {
        prevAnimation.forEach((item) => {item.classList.add('preview-animate');})
    }
    isScrolling = true;
}

//toggle constructor positions

const positionsHelm = document.querySelectorAll(".choose__positions-helmet");
const positionsVis = document.querySelectorAll(".choose__positions-visor");
const positionsHold = document.querySelectorAll(".choose__positions-holder");

const constructorHelm = document.querySelectorAll('.choose__slider-helmet');
const constructorVis = document.querySelectorAll('.choose__slider-visor');
const constructorHold = document.querySelectorAll('.choose__slider-holder');

console.log(positionsHelm.length);

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
    constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHelm.forEach((item) => { item.classList.remove('active'); });
    constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('active'); });
    constructorVis[0].classList.add('active');
    document.querySelector(".choose__price-position.visor").innerHTML = document.querySelector(".choose__positions-visor-name.visor1").innerHTML;
    positionsVis.forEach((item) => {
        item.classList.remove('active');
    });
    positionsVis[0].classList.add('active');
    constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
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
    constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('active'); });
    // constructorVis.forEach((item) => { item.classList.remove('presetted'); });
    constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
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
    constructorHelm.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorHelm.forEach((item) => { item.classList.add('choose-mod'); });
    constructorVis.forEach((item) => { item.classList.remove('preview-animate'); });
    constructorVis.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHold.forEach((item) => { item.classList.remove("preview-animate"); });
    constructorHold.forEach((item) => { item.classList.add('choose-mod'); });
    constructorHold.forEach((item) => { item.classList.remove('active'); });
    // document.querySelector('.choose__slider-holder.presetted').classList.add('active');
    // document.querySelector('.choose__slider-holder.presetted').classList.remove('presetted');
    const currHelmID = this.id;
    console.log(currHelmID);
    document.getElementById('choice-' + currHelmID).classList.add('active');
    document.querySelector(".choose__price-position.holder").innerHTML = document.querySelector(".choose__positions-holder-name" + "." + currHelmID).innerHTML;
}