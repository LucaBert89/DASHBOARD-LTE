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
    localColors(clicked);
    darkorwhite();
}


function localColors (data) {
    localStorage.getItem("backgrounddark");
    localStorage.getItem("backgroundWhite");
    localStorage.getItem("colorWhite");
    localStorage.getItem("color");

    localStorage.setItem("backgrounddark", "bcdarkgrey");
    localStorage.setItem("backgroundWhite", "#ECF0F5");
    localStorage.setItem("colorWhite", "whitec");

    localStorage.setItem("color", data); 
    document.documentElement.style.setProperty(mainBackground, localStorage.getItem("color"));
 
}

document.documentElement.style.setProperty(mainBackground, localStorage.getItem("color"));



function darkorwhite() {
    localStorage.getItem("color") !== "#ECF0F5" ? setDarkBg() : setWhiteBg();
}

darkorwhite();

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
    mainSite.classList.remove(localStorage.getItem("colorWhite"));
    for(i=0; i< divs.length; i++) {
        if(divs[i].getAttribute("data-class")) {
            divs[i].classList.remove(localStorage.getItem("backgrounddark"));
            divs[i].classList.add(localStorage.getItem("backgroundWhite"));
        }
    }
}