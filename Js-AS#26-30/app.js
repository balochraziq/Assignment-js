// Cap#26-30

// Qs1
var user = +prompt("Enter a positive integer:")
document.write("<h3>Qs1</h3> Number " + user + "<br>")
document.write("round off value " + Math.round(user) + "<br>")
document.write("floor value " + Math.floor(user) + "<br>")
document.write("ceil value " + Math.ceil(user) + "<br>")


// Qs2
var user = +prompt("Enter a positive integer:")
document.write("<h3>Qs2</h3> Number " + user + "<br>")
document.write("round off value " + Math.round(user) + "<br>")
document.write("floor value " + Math.floor(user) + "<br>")
document.write("ceil value " + Math.ceil(user) + "<br>")



// Qs3
const inputNumber = parseFloat(prompt("Enter a number:"));

if (isNaN(inputNumber)) {
    alert('Please enter a valid number.');
} else {
    const absoluteValue = Math.abs(inputNumber);
    alert(`The absolute value of ${inputNumber} is ${absoluteValue}`);
}



// Qs4
var number = +prompt("Enter Number");
var bigDecimal = Math.random(number)
var improvedNum = (bigDecimal * 6) + 1;
document.write("random dice valuo: " + number + "<br>")
document.write("random dice valuo: " + Math.floor(improvedNum) + "<br> <br>")



// Qs5
const userInput = prompt("Press 'OK' to toss the coin.");
if (userInput !== null) {
    const coinResult = Math.random() < 2.5 ? "Heads" : "Tails";
    document.write(`You got: ` + coinResult + "<br> <br>");
}



// Qs6
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write(`Random Number: ` + randomNumber+ "<br> <br>");



// Qs7
var userWeight = prompt("Please enter your weight.");
if (userWeight !== null) {
    var weight = parseFloat(userWeight);

    if (isNaN(weight)) {
        document.write("Invalid input. Please enter a valid number.");
    } else {
        document.write(`Your weight is: ` + weight + ` kilograms <br> <br>`);
    }
}



// Qs8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess the secret number (between 1 and 10):");
if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
    if (userGuess === secretNumber) {
        alert("Congratulations! You guessed the secret number.");
    } else {
        alert(`Sorry, the secret number was ` + secretNumber + `Try again!`);
    }
} else {
    alert("Please enter a valid number between 1 and 10.");
}
