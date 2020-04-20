export const displayMain = (function () {
    function createMain(pageName) {
        switch (pageName) {
            case "home":
                return createHome();
                break;
            case "menu":
                return createMenu();
                break;
            case "presence":
                return createPresence();
                break;
            case "contact":
                return createContact();
                break;
            default:
                console.warn("In FileName 'displaymain.js' in createMain function default switch got loaded ");
                break;
        }
    }

    function show() {
        let not = 1;
        const id = setInterval(advanceSlide, 5000);

        function advanceSlide(n = 1) {
            slideShow(not += n);
        }

        function currentSlide(n) {
            slideShow(not = n);
        }


        function slideShow(n) {
            const e = document.querySelectorAll(".carousal-slide");
            const d = document.querySelectorAll('.dots');
            for (let k = 0; k < e.length; k++) {
                e[k].classList.remove('active');
                e[k].classList.add('inactive');
            }
            const num = (n + 3) % 4;
            e[num - 1].classList.add('active');
        }
        return {
            currentSlide,
            advanceSlide,
        }
    };

    function createHome() {
        const main = document.createElement('div');
        main.classList.add('main');

        const mainc = document.createElement('div');
        mainc.classList.add('main-carousal-container');

        const cc = document.createElement('div');
        cc.classList.add('carousal-container');

        const prev = document.createElement('div');
        prev.classList.add('prev');
        prev.innerHTML = '&#10094;';
        prev.addEventListener('click', (e) => show().advanceSlide(-1));
        cc.appendChild(prev);

        const next = document.createElement('div');
        next.classList.add('next');
        next.innerHTML = '&#10095;';
        next.addEventListener('click', (e) => show().advanceSlide(1));
        cc.appendChild(next);

        let data = {
            d1: {
                class1: "active",
                html: "Caption 1",
                textClass: "text",
                src: "images/home_001.jpeg",
                alt: "home_001",
                imgClass: "slide"
            },
            d2: {
                class1: "inactive",
                html: "Caption 1",
                textClass: "text",
                src: "images/home_002.jpeg",
                alt: "home_002",
                imgClass: "slide"
            },
            d3: {
                class1: "inactive",
                html: "Caption 1",
                textClass: "text",
                src: "images/home_003.jpeg",
                alt: "home_003",
                imgClass: "slide"
            },
            d4: {
                class1: "inactive",
                html: "Caption 1",
                textClass: "text",
                src: "images/home_004.jpeg",
                alt: "home_004",
                imgClass: "slide"
            }
        }

        for (let k in data) {
            const d1 = document.createElement('div');
            d1.classList.add(data[k].class1);
            d1.classList.add('carousal-slide');
            const d11 = document.createElement('div');
            d11.innerHTML = data[k].html;
            d11.classList.add('text');
            const i1 = document.createElement('img');
            i1.setAttribute('src', `${data[k].src}`)
            i1.classList.add(data[k].imgClass);
            d1.appendChild(d11);
            d1.appendChild(i1);
            cc.appendChild(d1);
        }

        const dd = document.createElement('div');
        dd.classList.add("carousal-nav");

        for (let i = 1; i < 5; i++) {
            const span = document.createElement('span');
            span.classList.add('dots');
            span.addEventListener('click', (e) => show().currentSlide(i));
            dd.appendChild(span);
        }
        mainc.appendChild(cc);
        mainc.appendChild(dd);

        main.appendChild(mainc);

        const description = document.createElement('div');

        description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae id fugiat quam eum obcaecati voluptatem nisi nesciunt. Earum fugit corrupti repellat molestias velit esse doloribus quo dolorum ipsum est.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae id fugiat quam eum obcaecati voluptatem nisi nesciunt. Earum fugit corrupti repellat molestias velit esse doloribus quo dolorum ipsum est.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae id fugiat quam eum obcaecati voluptatem nisi nesciunt. Earum fugit corrupti repellat molestias velit esse doloribus quo dolorum ipsum est.";
        description.classList.add('main-about');
        main.appendChild(description);
        show();
        return main;
    };

    function createMenu() {
        const main = document.createElement('div');
        main.classList.add('main');
        const menuInfo = {
            "card1": {
                "url": "images/food_001.jpeg",
                "desc": "Laziz indian kadhai paneer",
                "class": "menu-card-image"
            },
            "card2": {
                "url": "images/food_002.jpeg",
                "desc": "Cheese Burger",
                "class": "menu-card-image"
            },
            "card3": {
                "url": "images/food_003.jpeg",
                "desc": "Full Indian Meal",
                "class": "menu-card-image"
            },
            "card4": {
                "url": "images/food_004.jpeg",
                "class": "menu-card-image",
                "desc": "Masala Dosa"
            }
        };
        for (let card in menuInfo) {
            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');

            const div = document.createElement('div');
            div.style.cssText = `background-image:url(${menuInfo[card].url});`
            div.classList.add(menuInfo[card].class);

            const cardContent = document.createElement('div');
            cardContent.classList.add('menu-card-content');
            cardContent.innerHTML = menuInfo[card].desc;

            menuCard.appendChild(div);
            menuCard.appendChild(cardContent);
            main.appendChild(menuCard);
        }
        return main;
    }

    function createPresence() {
        const main = document.createElement('div');
        main.classList.add('main');
        const presenceInfo = {
            "Goa": {
                "url": "images/home_005.jpeg",
                "class": "main-images",
                "desc": "A vacation to remember"
            },
            "Fateh": {
                "url": "images/home_006.jpeg",
                "class": "main-images",
                "desc": "Live Large : Live Kingly"
            },
            "royal": {
                "url": "images/home_003.jpeg",
                "class": "main-images",
                "desc": "Luxury is Normal"
            }
        }
        for (const prop in presenceInfo) {
            const div = document.createElement('div');
            div.classList.add(`${presenceInfo[prop].class}`);
            div.style.cssText = `background-image:url(${presenceInfo[prop].url});`;
            div.innerHTML = `${presenceInfo[prop].desc}`;
            main.appendChild(div);
        }
        return main;
    }

    function createContact() {
        const main = document.createElement('div');
        main.classList.add('main');

        const div = document.createElement('div');
        div.innerHTML = "Contact Info goes here";
        div.classList.add('main-images');
        main.appendChild(div);

        return main;
    }

    return {
        createMain,
    }
})();