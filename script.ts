// Navigation Bar Scroll Effect
const navScrollChanges = (scrollY) => {
    if(scrollY > 0) {
        let nav = document.getElementById("nav-top");
        nav && (nav.id = "nav-active");
    }
    else {
        let nav = document.getElementById("nav-active");
        nav && (nav.id = "nav-top");
    }
}

document.addEventListener("scroll", (event) => {
    navScrollChanges(window.scrollY);
})