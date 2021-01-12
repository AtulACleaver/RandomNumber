alert("It's my pleasure to assit you in finding a random number for yourself.");
var max;



function randomNumber(max) {
    function promptq() {
        max = prompt("The number between 0 and _____.");
    }
    promptq();
    document.getElementById("rand").innerHTML = "So, a random number between 0 and " + max + " is " + Math.floor((Math.random() * max));
}