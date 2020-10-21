function myBarca() {
    document.querySelector("#color").style.backgroundColor = "rgb(150, 38, 100)"; // document.querySelector gets an html element. In this case it gets the id "color". Notice that the id is inside "".
    document.querySelector("#color").style.color = "gold";
}

function barcaReset() {
    document.querySelector("#color").style.backgroundColor = "rgb(40, 217, 103)";
    document.querySelector("#color").style.color = "black";
}



