export function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    let footerImageMap = {
        "facebook": {
            "url": "https://www.facebook.com",
            "src": "images/facebook.png",
            "alt": "facebook"
        },
        "instagram": {
            "url": "https://www.instagram.com",
            "src": "images/instagram.png",
            "alt": "instagram"
        },
        "twitter": {
            "url": "https://www.twitter.com",
            "src": "images/twitter.png",
            "alt": "twitter"
        },
        "youtube": {
            "url": "https://www.youtube.com",
            "src": "images/youtube.svg",
            "alt": "youtube"
        }
    };

    const div = document.createElement('div');
    div.innerHTML = "Follow us on : ";
    div.classList.add('footer-description');
    footer.appendChild(div);
    for (let key in footerImageMap) {
        const a = document.createElement('a');
        let imgContent = `<img class ="footer-icons" src = ${footerImageMap[key].src} alt = ${footerImageMap[key].alt}>`;
        a.innerHTML = imgContent;
        a.href = footerImageMap[key].url;
        footer.appendChild(a);
    }
    return footer;
}