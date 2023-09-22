//    chpter #12 to #13
//  Qs 1

// Get user input
var user_input = prompt("Enter a character (number or string):");

if (user_input.length === 1) {
    var ascii_value = user_input.charCodeAt(0);

    if (ascii_value >= 48 && ascii_value <= 57) {
         alert("The input is a number.");
    }
    else if (ascii_value >= 65 && ascii_value <= 90) {
        alert("The input is an uppercase letter.");
    }
    else if (ascii_value >= 97 && ascii_value <= 122) {
         alert("The input is a lowercase letter.");
    }
    else {
         alert("The input is not a number, uppercase letter, or lowercase letter.");
    }
} else {
     alert("Please enter a single character.");
}


// QS 2
var num1 = + prompt("Enter the first integer:");
var num2 = + prompt("Enter the second integer:");

if (num1 > num2) {
    document.write(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
} else {
     alert("Both integers are equal: " + num1);
}


// Qs 3
var userInput = prompt("Enter a number:");
var number = parseFloat(userInput);

if (isNaN(number)) {
    alert("Invalid input. Please enter a valid number.");
} else if (number > 0) {
    alert("The entered number is positive.");
} else if (number < 0) {
    alert("The entered number is negative.");
} else {
    alert("The entered number is zero.");
}



//  Qs 4


// //   Check if the character is a vowel
var arry = ['a', 'e', 'i', 'o', 'u']
var userInput = prompt("Enter a character:");
if (userInput.length ==) {
 var    result = isVowel(userInput);
  alert(`'${userInput}' is a vowel: ${result}`);
} else {
  alert("Please enter a single alphabetic character.");
}



// Qs 5
var correctPassword = "kochbe321";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}



// Qs 6
var greeting = + prompt("enter")
var hour = 13;
if (hour < 18 && greeting > 18) {
    alert(greeting = "Good day")
} else {
    alert(greeting = "Good evening")
}


// Qs 7
var time = + prompt("Enter time in 24-hour:");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time input. Please enter a time between 0000 and 2359.");
}