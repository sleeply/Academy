//Swiper Section
let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/* navbar responsive */
let navbar = document.querySelector("nav");
let btn = document.querySelector(".icon");

function button() {
    document.querySelector('.nav-links').classList.toggle('nav-active');
};
btn.addEventListener("click", button);

function clicker() {
    alert("Извините но платить надо только наличкой))")
}
function Accaount() {
    alert("К сожалению для Facebook аккаунт не создан)")
}

