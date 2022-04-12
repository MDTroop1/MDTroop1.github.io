function handleScroll(){
    let els = document.getElementsByClassName("top-navbar");
    for(el of els){
        let thresh = 150;
        let pos = window.scrollY;
        if (pos > thresh) {
            el.classList.add("small");
        } else {
            el.classList.remove("small");
        }
    }
}
window.addEventListener("scroll", handleScroll);
handleScroll();