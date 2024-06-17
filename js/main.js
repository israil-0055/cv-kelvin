
const nav = document.querySelector('#nav');
const burger = document.querySelector('#burger')
const burgerImg = document.querySelector('#burger-img')

burger,onclick = () =>{
    if ( nav.classList.toggle('nav--open')){
        burgerImg.src = "./img/icons/burger-CLOSE.svg";
    }else{
        burgerImg.src = "./img/icons/burger.svg";
    }
} 

AOS.init({
    once: true
});