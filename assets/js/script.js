let BtnDark = document.querySelector("#dark-btn");
let mainSite = document.querySelector("#main-site");
let dashtitle = document.querySelector("#dash-title");
let bcWhite = document.querySelectorAll(".bcwhite");
let darkmodeColor = document.querySelectorAll("div");


(function init() {
   BtnDark.addEventListener("click", SetDark);
  /*BtnDark.addEventListener("click", () => {
        if(mainSite.className == "dark whitec") {
            console.log(event.target);
            mainSite.classList.remove("dark");
            dashtitle.classList.remove("whitec");
            mainSite.classList.remove("whitec");
            bcWhite.forEach(el =>el.style.backgroundColor = "#fff");
        } else {
            mainSite.classList.add("dark");
            dashtitle.classList.add("whitec");
            bcWhite.forEach(el =>el.style.backgroundColor = "#222D32");
            mainSite.classList.add("whitec");
        }
    });*/
})();


/* 2^ solution */

function SetDark() {
    if(mainSite.className == "dark whitec") {
        dashtitle.classList.remove("whitec");
        mainSite.classList.remove("dark", "whitec");
        for(i=0; i< darkmodeColor.length; i++) {
            if(darkmodeColor[i].getAttribute("data-class")) {
                darkmodeColor[i].classList.remove("bcdarkgrey");
                darkmodeColor[i].classList.add("bcwhite");
        }}
    } else {
        mainSite.classList.add("dark", "whitec");
        for(i=0; i< darkmodeColor.length; i++) {
            if(darkmodeColor[i].getAttribute("data-class")) {
                darkmodeColor[i].classList.add("bcdarkgrey");
        }
        dashtitle.classList.add("whitec");
    }
    }}