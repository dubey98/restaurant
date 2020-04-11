import {
    createNav
} from "./displayNav.js";
import {
    displayMain
} from "./displayMain.js";
import {
    createFooter
} from "./displayFooter";

const content = document.querySelector('.content');

content.appendChild(createNav());
content.appendChild(displayMain.createMain('home'));
content.appendChild(createFooter());