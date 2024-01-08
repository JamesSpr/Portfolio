// Navigation Bar Scroll Effect
const navScrollChanges = (scrollY) => {
    // Change the navigation style at the bottom of the hero image
    if(scrollY > document.documentElement.clientHeight * 0.75) {
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

// Dark Mode
window.addEventListener("load", () => {
    let darkMode = localStorage.getItem("darkMode")
    
    if(darkMode === "enabled") {
        document.body.classList.add("darkmode")
    }
})

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
