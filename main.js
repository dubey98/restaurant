!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e){switch(e){case"home":return function(){const e=document.createElement("div");e.classList.add("main");const t=document.createElement("img");t.setAttribute("src","images/home_007.jpeg"),t.classList.add("main-images"),e.appendChild(t);const n=document.createElement("div");return n.innerHTML="This is where the discription goes for the home page.",n.classList.add("main-about"),e.appendChild(n),e}();case"menu":return function(){const e=document.createElement("div");e.classList.add("main");const t={card1:{url:"images/food_001.jpeg",desc:"Laziz indian kadhai paneer",class:"menu-card-image"},card2:{url:"images/food_002.jpeg",desc:"Cheese Burger",class:"menu-card-image"},card3:{url:"images/food_003.jpeg",desc:"Full Indian Meal",class:"menu-card-image"},card4:{url:"images/food_004.jpeg",class:"menu-card-image",desc:"Masala Dosa"}};for(let n in t){const a=document.createElement("div");a.classList.add("menu-card");const c=document.createElement("div");c.style.cssText=`background-image:url(${t[n].url});`,c.classList.add(t[n].class);const r=document.createElement("div");r.classList.add("menu-card-content"),r.innerHTML=t[n].desc,a.appendChild(c),a.appendChild(r),e.appendChild(a)}return e}();case"presence":return function(){const e=document.createElement("div");e.classList.add("main");const t={Goa:{url:"images/home_005.jpeg",class:"main-images",desc:"A vacation to remember"},Fateh:{url:"images/home_006.jpeg",class:"main-images",desc:"Live Large : Live Kingly"},royal:{url:"images/home_003.jpeg",class:"main-images",desc:"Luxury is Normal"}};for(const n in t){const a=document.createElement("div");a.classList.add(""+t[n].class),a.style.cssText=`background-image:url(${t[n].url});`,a.innerHTML=""+t[n].desc,e.appendChild(a)}return e}();case"contact":return function(){const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div");return t.innerHTML="Contact Info goes here",t.classList.add("main-images"),e.appendChild(t),e}();default:console.warn("In FileName 'displaymain.js' in createMain function default switch got loaded ")}}n.r(t);const c=document.querySelector(".content");function r(e){const t=e.toElement.id,n=document.querySelector(".main");switch(t){case"nav-bar-logo":c.replaceChild(a("home"),n);break;case"nav-bar-menu":c.replaceChild(a("menu"),n);break;case"nav-bar-contact":c.replaceChild(a("contact"),n);break;case"nav-bar-presence":c.replaceChild(a("presence"),n);break;default:console.warning("failed to load "+t)}}const s=document.querySelector(".content");s.appendChild(function(){const e={RASOI:{class:"nav-bar-content",id:"nav-bar-logo"},"OUR PRESENCE":{class:"nav-bar-content",id:"nav-bar-presence"},MENU:{class:"nav-bar-content",id:"nav-bar-menu"},"CONTACT US":{class:"nav-bar-content",id:"nav-bar-contact"}},t=document.createElement("div");t.classList.add("nav-bar");for(let n in e){const a=document.createElement("div");a.classList.add(e[n].class),a.id=e[n].id,a.innerHTML=n,a.addEventListener("click",e=>r(e)),t.appendChild(a)}return t}()),s.appendChild(a("home")),s.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");let t={facebook:{url:"https://www.facebook.com",src:"images/facebook.png",alt:"facebook"},instagram:{url:"https://www.instagram.com",src:"images/instagram.png",alt:"instagram"},twitter:{url:"https://www.twitter.com",src:"images/twitter.png",alt:"twitter"},youtube:{url:"https://www.youtube.com",src:"images/youtube.svg",alt:"youtube"}};const n=document.createElement("div");n.innerHTML="Follow us on : ",n.classList.add("footer-description"),e.appendChild(n);for(let n in t){const a=document.createElement("a");let c=`<img class ="footer-icons" src = ${t[n].src} alt = ${t[n].alt}>`;a.innerHTML=c,a.href=t[n].url,e.appendChild(a)}return e}())}]);