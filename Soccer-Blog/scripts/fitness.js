//This calculates the BMI on the fitness page
function calculate() {
    var height = parseInt(document.querySelector("#height").value); // parseInt converts string to a integer. .value porperty gets value from input
    var weight = parseInt(document.querySelector("#weight").value);
    var sqt = Math.pow(height, 2); // This variable holds the value of the height squared 
    var bmi = weight / sqt * 703; // Bmi formula

    document.querySelector("#result").innerHTML = bmi; //innerHTML inserts the value in between a pair of HTML tags. After filling form you can see the result in between the HTML tags!

}

function formReset() { 
    document.getElementById("newForm").reset(); // This resets the result of the form
    let result = ""; // sets variable equal to a blank space
    document.querySelector("#result").innerHTML = result; // This resets the form
}


