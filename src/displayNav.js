import {
    displayMain
} from "./displayMain.js";

const content = document.querySelector('.content');

export function createNav() {
    const properties = {
        "RASOI": {
            "class": "nav-bar-content",
            "id": "nav-bar-logo"
        },
        "OUR PRESENCE": {
            "class": "nav-bar-content",
            "id": "nav-bar-presence"
        },
        "MENU": {
            "class": "nav-bar-content",
            "id": "nav-bar-menu"
        },
        "CONTACT US": {
            "class": "nav-bar-content",
            "id": "nav-bar-contact"
        }
    }
    const nav = document.createElement("div");
    nav.classList.add('nav-bar');
    for (let prop in properties) {
        const div = document.createElement('div');
        div.classList.add(properties[prop].class);
        div.id = properties[prop].id;
        div.innerHTML = prop;

        div.addEventListener('click', e => handleClick(e));

        nav.appendChild(div);
    }
    return nav;
};

function handleClick(e) {
    const callingElement = e.toElement.id;
    const main = document.querySelector('.main');
    switch (callingElement) {
        case "nav-bar-logo":
            content.replaceChild(displayMain.createMain('home'), main);
            break;
        case "nav-bar-menu":
            content.replaceChild(displayMain.createMain('menu'), main);
            break;
        case "nav-bar-contact":
            content.replaceChild(displayMain.createMain('contact'), main);
            break;
        case "nav-bar-presence":
            content.replaceChild(displayMain.createMain('presence'), main);
            break;
        default:
            console.warning(`failed to load ${callingElement}`)
            break;
    }
}