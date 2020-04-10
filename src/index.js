import {
    createNav
} from "./displayNav.js";
import {
    createMain
} from "./displayMain.js";
import {
    createFooter
} from "./displayFooter";

const content = document.querySelector('.content');

content.appendChild(createNav());
content.appendChild(createMain('home'));
content.appendChild(createFooter());