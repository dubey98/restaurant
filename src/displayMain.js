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

    function createHome() {
        const main = document.createElement('div');
        main.classList.add('main');

        const carousal = document.querySelector('.main-carousal-container');
        carousal.style.display = "block";
        const description = document.createElement('div');

        description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae id fugiat quam eum obcaecati voluptatem nisi nesciunt. Earum fugit corrupti repellat molestias velit esse doloribus quo dolorum ipsum est.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae id fugiat quam eum obcaecati voluptatem nisi nesciunt. Earum fugit corrupti repellat molestias velit esse doloribus quo dolorum ipsum est.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae id fugiat quam eum obcaecati voluptatem nisi nesciunt. Earum fugit corrupti repellat molestias velit esse doloribus quo dolorum ipsum est.";
        description.classList.add('main-about');
        main.appendChild(description);

        return main;
    };

    function createMenu() {
        const main = document.createElement('main');
        const main2 = document.createElement('div');
        main2.classList.add('main');
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
            main2.appendChild(menuCard);
        }
        main.appendChild(main2);
        return main;
    }

    function createPresence() {
        const main = document.createElement('main');
        const main2 = document.createElement('div');
        main2.classList.add('main');
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
            main2.appendChild(div);
        }
        main.appendChild(main2);
        return main;
    }

    function createContact() {
        const main = document.createElement('main');
        const main2 = document.createElement('div');
        main2.classList.add('main');

        const div = document.createElement('div');
        div.innerHTML = "Contact Info goes here";
        div.classList.add('main-images');
        main2.appendChild(div);
        main.appendChild(main2);
        return main;
    }

    return {
        createMain,
    }
})();