

function toMap() {

    document.body.style.backgroundImage = "none";
    document.querySelector(".mapSvg").style.display = "block";
    document.querySelector(".rosita").style.display = "none";
    document.querySelector(".toMapButton").style.display = "none";

}

function travel(location) {

    document.querySelector(".mapSvg").style.display = "none";
    document.body.style.backgroundImage = "url('./images/wallpapers/" + location + "')";
    document.querySelector(".rosita").style.display = "block";
    document.querySelector(".toMapButton").style.display = "block";
}






function bg(background) { /* for testing */
    document.body.style.backgroundImage = "url(" + background + ")";

}



