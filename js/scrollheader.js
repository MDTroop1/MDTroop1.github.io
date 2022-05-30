function handleScroll(){
    let docEl = document.documentElement;
    let scrollPos = window.pageYOffset;

    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;

    let scroll = scrollPos / (docHeight - winHeight);

    docEl.style.setProperty('--scroll', scroll);
}

window.addEventListener("scroll", handleScroll);
handleScroll();