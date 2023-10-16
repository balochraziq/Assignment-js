// //! Chapter # 35-38 to
// Qs1
var date = new Date();
document.write(date + "<br><br>");


// Qs2
function greetUser(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    var greeting = 'Hello, ' + fullName;
    return greeting;
}
var firstName = `Raziq`
var lastName = `Ali`
var greetingMessage = greetUser(firstName, lastName);
document.write(greetingMessage + "<br><br>");



//  Qs3
function addTwoNumbers() {
    var number1 = +prompt("Enter the first number:");
    var number2 = +prompt("Enter the second number:");

    var sum = number1 + number2;
    return sum;
}
var result = addTwoNumbers();
document.write("The sum of the two numbers is: " + result+ "<br><br>");


// Qs4
function addThreeNumbers(num1, num2, num3) {
    var sum = num1 + num2 * num3;
    return sum;
}
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var num3 = +prompt("Enter the third number:");
var sum = addThreeNumbers(num1, num2, num3);
document.write("The sum of the three numbers is: " + sum + "<br><br>");



// Qs5
function square(num) {
    var square = num * num;
    return square;
}

var num = +prompt("Enter a number:");
var square = square(num);
document.write("The square of the number is: " + square + "<br><br>");



// Qs6
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

var num = +prompt("Enter a number:");
var factorial = factorial(num);
document.write("The factorial of the number is: " + factorial + "<br><br>");




// Qs7
function count(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br><br>");
    }
}

var start = +prompt("Enter start number:");
var end = +prompt("Enter end number:");
count(start, end);



// Qs8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
        return Math.pow(number, 2);
}

var baseSquared = calculateSquare(base);
var perpendicularSquared = calculateSquare(perpendicular);
var hypotenuseSquared = baseSquared + perpendicularSquared;
var hypotenuse = Math.sqrt(hypotenuseSquared);
    return hypotenuse;
}
var base = 3;
var perpendicular = 4;
var hypotenuse = calculateHypotenuse(base, perpendicular);
document.write(`The hypotenuse of the right triangle is: ` + hypotenuse + "<br><br>");



// Qs9




function calculateRectangleArea(width, height) {
    return width * height;
}
var width = 7;
var height = 10;
var area1 = calculateRectangleArea(width, height);
document.write(`i.Arguments as value: ` + area1 + "<br>");

var width = 5;
var height = 10;
var area2 = calculateRectangleArea(width, height); // Pass variables as arguments
document.write(`ii. Arguments as variables: ` + area2 + "<br><br>");



// Qs10
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
var inputString = "A man, a plan, a canal, Panama";
var isInputPalindrome = isPalindrome(inputString);
if (isInputPalindrome) {
    document.write(inputString + ` is a palindrome.`+ "<br><br>");
} else {
    document.write(inputString + ` is not a palindrome.`+ "<br><br>");
}





// Qs11
function firstWord(str) {
var words = str.split(' ');
var capitalizedWords = words.map(word => {
    if (word.length > 0) {
     return word.charAt(0).toUpperCase() + word.slice(1);
 } else {
        return '';
}
    });
var result = capitalizedWords.join(' ');
    return result;
}
var inputString = `the quick brown fox`;
var capitalizedString = firstWord(inputString);

document.write(`EXAMPLE STRING: ` + inputString + "<br>");
document.write(`EXPECTED OUTPUT: ` + capitalizedString + "<br><br>");




// Qs12
function findLongestWord(str) {
   var words = str.split(' ');
var longestWord = '';
var longestLength = 0;
for (var word of words) {
    if (word.length > longestLength) {
      longestWord = word;
      longestLength = word.length;
    }
  }

  return longestWord;
}
var inputString = 'Web Development Tutorial';
var longest = findLongestWord(inputString)
document.write(`EXAMPLE STRING: ` +inputString +"<br>")
document.write(`EXPRCTED OUTPUT: ` + longest + "<br><br>")



// Qs13
function letter(str, letter) {
    str = str.toLowerCase();
    letter = letter.toLowerCase();
  
var count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }
  
    return count;
  }
  
var inputString = 'JSResourceS.com';
var letterToCount = 'o';
var occurrences = letter(inputString, letterToCount);
document.write(`The letter '${letterToCount}' appears ${occurrences} times in the string.`+ "<br><br>");
  



// Qs14
function ference(radius) {
   var circumference = 2 * Math.PI * radius;
    document.write(`circumference of circle: `+ circumference +"<br>");
}  
function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
   document.write(`Area of circle: ` +area );
} 
  var  radius = 5; 
ference(radius);
calcArea(radius);
  