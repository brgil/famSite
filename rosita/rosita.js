

function changeBg(background) {


    document.body.style.backgroundImage = "url('./images/wallpapers/" + background + "')";
    
}

function toMap() {

    // document.querySelector(".travelbtn").addEventListener("click", function(){
        document.body.style.backgroundImage = "";
        document.querySelector(".mapsvg").style.display = "block";
    //});

}

function travel(location) {
    // essentially same as changeBg for now
    document.querySelector(".mapsvg").style.display = "none";
    document.body.style.backgroundImage = "url('./images/wallpapers/" + location + "')";
    // !!! INSERT APPEAR ROSITA HERE !!!
}






function bg(background) { /* DELETE THIS */
    document.body.style.backgroundImage = "url(" + background + ")";

}



