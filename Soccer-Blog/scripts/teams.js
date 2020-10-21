// Global Variables to hold items on list.
// This code allows the user to change the list after clicking the button in the teams page
var x;
var y;
var z;
function yourList(){
    x = prompt("What is your favorite team?"); // prompt method makes window pop up
    y = prompt("What is your second favorite team?");
    z = prompt("What is your third favorite team?");
    updateList(); // calls the updateList function
}
function updateList(){
    document.getElementById("firstTeam").innerHTML = x; // innerHTML will change the html within the id.
    document.getElementById("secondTeam").innerHTML = y;
    document.getElementById("thirdTeam").innerHTML = z;
}
function resetList(){
    let x = "<li>Fc Barcelona</li>";
    let y = "<li>Manchester United</li>";
    let z = "<li>Cruz Azul</li>";
    document.getElementById("firstTeam").innerHTML = x;
    document.getElementById("secondTeam").innerHTML = y;
    document.getElementById("thirdTeam").innerHTML = z;
}




/*
function bestTeams(){
    var x = document.getElementsByClassName("fa fa-star checked");
    if(x = 5){
        var y = document.getElementsByClassName("grid-item");

        document.querySelector("teams").innerHTML = y;
    }
}
*/


/* This rotates the image 180 degrees function rotateImage() {
    var img = document.getElementById('myimage');
    img.style.transform = 'rotateY(180deg)';

} */ 
/*function colorText(){
    document.getElementById('description').color = red;
} */ 

/*function rotateImage() {
    var img = document.getElementById('myimage');
    img.style.backgroundColor = 'rotateY(180deg)';
} */