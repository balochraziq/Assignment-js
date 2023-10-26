// Ch#_38-42!


// Qs1
function power(a, b) {
    return Math.pow(a, b);
}
var result = power(2, 5);
alert(`calculate the value of a raised to b: ` + result);



// Qs2
function Leap(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
let year = +prompt("Enter a year:");
if (Leap(year)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}



// Qs3
function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function Triangle(a, b, c) {
    var S = semiPerimeter(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}
let a = 3;
let b = 4;
let c = 5;
let triangleArea = Triangle(a, b, c);
document.write("<h3>Qs3</h3>"+ "The area of the triangle is: " + triangleArea + "<br><br>");



// Qs4
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
}

function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = 300;
    var marksObtained = subject1 + subject2 + subject3;
    return (marksObtained / totalMarks) * 100;
}

function mainFunction(subject1, subject2, subject3) {
    var average = calculateAverage(subject1, subject2, subject3);
    var percentage = calculatePercentage(subject1, subject2, subject3);

    document.write("<h3>Qs4</h3>" + "Average marks: " + average + "<br>");
    document.write("Percentage: " + percentage + "%" + "<br><br>");
}

var subject1Marks = 70;
var subject2Marks = 80;
var subject3Marks = 90;
mainFunction(subject1Marks, subject2Marks, subject3Marks);



// Qs5
function customIndexOf(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1;
}
let str = "Hello, world!";
let char = "o";
let index = customIndexOf(str, char);
document.write("<h3>Qs5</h3>"+"Index of " + char + " in " + str + "is " + index +"<br><br>");



// Qs6
function deleteVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}
var sentence = "This is a sample sentence with some vowels";
var result = deleteVowels(sentence);
document.write("<h3>Qs6</h3>" + "Original Sentence: " + sentence + "<br>");
document.write("After Deleting Vowels: " + result + "<br><br>");




// Qs7
function countSuccessiveVowels(text) {
    let count = 0;
    const vowels = "aeiou";
    for (let i = 0; i < text.length - 1; i++) {
        const firstChar = text[i].toLowerCase();
        const secondChar = text[i + 1].toLowerCase();
        if (vowels.includes(firstChar) && vowels.includes(secondChar)) {
            count++;
        }
    }
    return count;
}
const text = "Pleases read this application and give me gratuity";
const occurrences = countSuccessiveVowels(text);
document.write("<h3>Qs7</h3>"+"Occurrences of successive vowels:", occurrences + "<br><br>");




// Qs8
function Meters(kilometers) {
    return kilometers * 1000;
}

function Feet(kilometers) {
    return kilometers * 3280.84;
}

function Inches(kilometers) {
    return kilometers * 39370.1;
}

function Centimeters(kilometers) {
    return kilometers * 100000;
}

let distanceInKilometers = + prompt("Enter the distance between two cities in kilometers:");
if (!isNaN(distanceInKilometers)) {
    document.write("<h3>Qs8</h3>"+`The distance is ` + Meters(distanceInKilometers) + ` meters.`+ "<br>");
    document.write(`The distance is ` + Feet(distanceInKilometers) + ` feet.`+ "<br>");
    document.write(`The distance is ` + Inches(distanceInKilometers) + ` inches.`+ "<br>");
    document.write(`The distance is ` + Centimeters(distanceInKilometers) + ` centimeters`+ "<br><br>");
}
else {
    alert('Please enter a valid number');
}




// Qs9
function calculateOvertimePay(hoursWorked) {
let regularHours = 40;
let hourlyRate = 12.00;
let overtimePay = 0;
if (hoursWorked > regularHours){
    let extraHours = Math.ceil((hoursWorked - regularHours)/regularHours)*regularHours;
    overtimePay += extraHours*hourlyRate;
}
else{
    overtimePay += hoursWorked*hourlyRate
}
    return overtimePay;
}
let hoursWorked = +prompt("How many hours did you work this week?");
if(!isNaN(hoursWorked)){
  document.write("<h3>Qs9</h3>" + `Your total pay for this week would be $ ` + calculateOvertimePay(hoursWorked)+ "<br><br>");
}
 else{
    alert('Please enter a valid number');
}
    



// Qs10
function calculateCurrencyNotes(amountInHundreds) {
    let remainingAmount = amountInHundreds;
    let notes100 = Math.floor(remainingAmount);
    remainingAmount -= notes100;
    let notes50 = Math.floor(remainingAmount / 0.5);
    remainingAmount -= notes50 * 0.5;
    let notes10 = Math.floor(remainingAmount / 0.1);

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };
}


let amountInHundreds = +prompt("Enter amount to  withdrawn!!");
let result1 = calculateCurrencyNotes(amountInHundreds);
document.write("<h3>Qs10</h3>"+"Currency Notes:" + "<br>");
document.write("100s:" + result1.notes100+ "<br>");
document.write("50s: " + result1.notes50+ "<br>");
document.write("10s: " + result1.notes10);


