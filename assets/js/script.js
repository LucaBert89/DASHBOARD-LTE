const themeBtn = document.querySelector("#themeSelector");
const themeSelection = document.querySelector("#themeSelection")
const themes = document.querySelectorAll(".themes");
const divs = document.querySelectorAll("div");
const mainBackground = "--mainbc";
const mainSite = document.querySelector("#main-site");
const arrows = document.querySelector(".arrows");


(function init() {
    for(i=0; i < themes.length; i++) {
        themes[i].addEventListener("click", setTheme);
    }
  
   themeBtn.addEventListener("click", openMenu);
})();


function openMenu() {
    themeSelection.classList.toggle("active");
}


function setTheme (event) {
    const clicked = event.target.getAttribute("value");
    
    if(localStorage.getItem("color")) {
        localStorage.setItem("color", clicked); 
        document.documentElement.style.setProperty(mainBackground, localStorage.getItem("color"));
    } else {
        let localColor = localStorage.getItem("color");
        document.documentElement.style.setProperty(mainBackground, localColor);
    }
    local();
    if(clicked !== "#ECF0F5") {
        setDarkBg();
    } else {
        setWhiteBg();
    }
}

function local () {
    localStorage.getItem("backgrounddark");
    localStorage.getItem("backgroundWhite");
    localStorage.getItem("colorWhite");

    localStorage.setItem("backgrounddark", "bcdarkgrey");
    localStorage.setItem("backgroundWhite", "bcwhite");
    localStorage.setItem("colorWhite", "whitec");
}

document.documentElement.style.setProperty(mainBackground, localStorage.color);



if(localStorage.getItem("color") !== "#ECF0F5") {
    setDarkBg();
} else {
    setWhiteBg();
}

function setDarkBg () {
    mainSite.classList.add(localStorage.getItem("colorWhite"));
    for(i=0; i< divs.length; i++) {
        if(divs[i].getAttribute("data-class")) {
            divs[i].classList.add(localStorage.getItem("backgrounddark"));
            divs[i].classList.remove(localStorage.getItem("backgroundWhite"));
        }
    }
};

function setWhiteBg() {
    mainSite.classList.remove("whitec");
    for(i=0; i< divs.length; i++) {
        if(divs[i].getAttribute("data-class")) {
            divs[i].classList.remove("bcdarkgrey");
            divs[i].classList.add("bcwhite");
        }
    }
}
