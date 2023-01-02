function goHome() {

    document.body.style.backgroundImage = "url('./images/homeInside.jpg')";
    document.querySelector("#introdiv").style.display = "none";
    document.querySelector("#mapSvg").style.display = "none";
    document.querySelector("#plushie").style.display = "none";
    document.querySelector("#toMapButton").style.display = "block";

}

function toMap() {

    document.body.style.backgroundImage = "none";
    document.querySelector("#mapSvg").style.display = "block";
    document.querySelector("#plushie").style.display = "none";
    document.querySelector("#toMapButton").style.display = "none";

}

function travel(location) {

    document.querySelector("#mapSvg").style.display = "none";
    document.body.style.backgroundImage = "url('./images/countries/" + location + "')";
    document.querySelector("#plushie").style.display = "block";
    document.querySelector("#toMapButton").style.display = "block";
}





/* TESTING FUNCTIONS */
function bg(background) { 
    document.body.style.backgroundImage = "url(" + background + ")";

}



