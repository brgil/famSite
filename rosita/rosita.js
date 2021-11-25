

function changeBg(background) {


    document.body.style.backgroundImage = "url('./images/wallpapers/" + background + "')";
    
}

function toMap() {

    // document.querySelector(".travelbtn").addEventListener("click", function(){
        document.body.style.backgroundImage = "none";
        document.querySelector(".mapsvg").style.display = "block";
        document.querySelector(".rosita").style.display = "none";
        document.querySelector(".toMapButton").style.display = "none";
    //});

}

function travel(location) {
    // essentially same as changeBg for now
    document.querySelector(".mapsvg").style.display = "none";
    document.body.style.backgroundImage = "url('./images/wallpapers/" + location + "')";
    document.querySelector(".rosita").style.display = "block";
    document.querySelector(".toMapButton").style.display = "block";
}






function bg(background) { /* DELETE THIS */
    document.body.style.backgroundImage = "url(" + background + ")";

}



