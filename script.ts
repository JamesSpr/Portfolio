// Navigation Bar Scroll Effect
const navScrollChanges = (scrollY) => {
    let nav = document.getElementById("nav");
    if(!nav) { return } // Don't run anything if nav is not found.

    if(scrollY > 0) {
        nav && nav.classList.add("active");
    }
    else {
        nav && nav.classList.remove("active");
    }

    activeNavButton(nav, scrollY)
}

// Activate the nav button based on the scroll height
const activeNavButton = (nav, scrollY) => {

    let navChildren = nav.children[0].children
    let hero = document.getElementById("hero")
    let about = document.getElementById("about")
    let projects = document.getElementById("projects")
    let contact = document.getElementById("contact")

    if(contact && Math.floor(contact?.getBoundingClientRect().top) <= 0) {
        for(var i = 0; i < nav.children[0].children.length; i++) {
            navChildren[i].children[0].classList.remove("active");
            if(navChildren[i].id == "nav-contact") {
                navChildren[i].children[0].classList.add("active");
            }
        }
    }
    else if(projects && Math.floor(projects?.getBoundingClientRect().top) <= 0) {
        for(var i = 0; i < nav.children[0].children.length; i++) {
            navChildren[i].children[0].classList.remove("active");
            if(navChildren[i].id == "nav-projects") {
                navChildren[i].children[0].classList.add("active");
            }
        }
    }
    else if(about && Math.floor(about?.getBoundingClientRect().top) <= 0) {
        for(var i = 0; i < nav.children[0].children.length; i++) {
            navChildren[i].children[0].classList.remove("active");
            if(navChildren[i].id == "nav-about") {
                navChildren[i].children[0].classList.add("active");
            }
        }
    }
    else { //about && Math.floor(about?.getBoundingClientRect().top) > 0
        for(var i = 0; i < nav.children[0].children.length; i++) {
            navChildren[i].children[0].classList.remove("active");
            if(navChildren[i].id == "nav-home") {
                navChildren[i].children[0].classList.add("active");
            }
        }
    }
}

document.addEventListener("scroll", (event) => {
    navScrollChanges(window.scrollY);
})

// Dark Mode
const toggleDarkMode = () => {
    let darkMode = localStorage.getItem("darkMode")
    
    if(darkMode !== "enabled") {
        document.body.classList.add("darkmode")
        localStorage.setItem("darkMode", 'enabled')
    }
    else {
        document.body.classList.remove("darkmode")
        localStorage.setItem("darkMode", 'disabled')
    }
}

window.addEventListener("load", () => {
    let darkMode = localStorage.getItem("darkMode")
    
    if(darkMode === "enabled") {
        document.body.classList.add("darkmode")
    }

    let nav = document.getElementById("nav");
    nav && activeNavButton(nav, window.scrollY);
})