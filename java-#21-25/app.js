//  Ch-#21-25

// Qs 1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Wellcom, " + fullName );


// Qs 2
var mobail = prompt("Enter your favorite mobile phone model:");
var inputLength = mobail.length;

document.write("The length of your input is: " + inputLength +"");


// Qs 3
var word = "Pakistani";
var index = word.indexOf("n");
document.write("The index of 'n' in the word 'Pakistani' is: " + index + "<br> <br>");


// Qs 4
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex + "<br> <br>");


// Qs 5
var word = "Pakistani";
var characterAtIndex3 = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3 + "<br> <br>");


// Qs 6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Welcome! " + fullName);


// Qs 7
var city = "Hyderabad";
var replaced = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + replaced + "<br> <br>");



// Qs 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
document.write("message1: " + message + "<br>");
document.write("message2: " + replacedMessage + "<br> <br>");



// Qs 9
var str = "472";
var num = parseInt(str);
document.write("value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
document.write("value: " + num + "<br>");
document.write("Type: " + typeof num + "<br> <br>");



// Qs 10
var userInput = prompt("Enter some text:");
var uppercaseInput = userInput.toUpperCase();
alert("Uper case: " + uppercaseInput);



// Qs 11
var userInput = prompt("Enter some text:");
var words = userInput.split(" ");
var titleCaseWords = [];

for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var titleCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCaseWords.push(titleCaseWord);
}
var titleCaseInput = titleCaseWords.join(" ");
alert("title case: " + titleCaseInput);



// Qs 12
var num = 35.36;
var numString = num.toString();
var numWithoutDot = numString.replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + numWithoutDot + "<br> <br>");



// Qs 13
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt('Enter an item to search:');

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) { 
        alert(userInput + " is avalibale at index " + [i] + " in our bakery");
    } else {
        alert("We are sorry. pastry is not ailvable in our bakery.");
    }
}





// Qs16
var university = "University of Karachi";
for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>");
}



// Qs 17
var userInput = prompt('Enter a string:');
if (userInput !== null && userInput !== "") {
    var lastCharacter = userInput.charAt(userInput.length - 1);

    alert('The last character is: ' + lastCharacter);
} else {
    alert('No input provided.');
}



// Qs 18
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";
var words = sentence.split(' ');
var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === wordToSearch.toLowerCase()) {
        count++;
        document.write('The quick brown fox jumps over thelazy dog. The are ' + count + " occurrence(s) " + wordToSearch + " times in the sentence.");
    }
}

