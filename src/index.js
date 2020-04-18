import {
    createNav
} from "./displayNav.js";
import {
    displayMain
} from "./displayMain.js";
import {
    createFooter
} from "./displayFooter";

const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
nav.appendChild(createNav());
main.appendChild(displayMain.createMain('home'));
footer.appendChild(createFooter());

let index = 1;
slideShow(1);
const id = setInterval(advanceSlides, 5000);

function advanceSlides(n = 1) {
    slideShow((index += n));
}

function currentSlide(n) {
    slideShow((index = n));
}

function slideShow(n) {
    const dots = document.querySelectorAll(".dots");
    const slides = document.querySelectorAll(".carousal-slide");
    const num = (n + 6) % 7;
    for (let i = 0; i < slides.length; i++) {
        dots[i].style.cssText = "background-color:rgba(0,0,0,0.2);";
        slides[i].classList.remove("active");
    }
    slides[num].classList.add("active");
    dots[num].style.cssText = "background-color:rgba(0,0,0,0.8);";
}