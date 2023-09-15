// Qs 1
var studeTname = []
var studentNames = new Array();
// Qs 2
var fruits = ["apple", "banana", "cherry", "date"];
// Qs 3
var fruits = ["apple", "banana", "cherry", "date"];
// Qs 4
var numbers = [1, 2, 3, 4, 5];
// Qs 5
var booleanArray = [true, false, true, false];
// Qs 6
var mixedArray = ["apple", 42, true, "banana", false, 123];

// Qs 7
document.write("<h3> Qs 9</h3>")
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ol>");

for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ol>");





//  Qs 8
document.write("<h3> Qs 8 </h3>")
var studentNames = ["Raziq", "Balach", "Ali"];
var studentScores = [436, 315, 320];
var studentPercentages = [];

for (var i = 0; i < studentScores.length; i++) {
    var percentage = (studentScores[i] / 500) * 100;
    studentPercentages.push(percentage.toFixed(2));
}
document.write("<h4>Student Scores and Percentages:</h4>");
document.write("<table>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");

for (var i = 0; i < studentNames.length; i++) {
    document.write("<tr><td>" + studentNames[i] + "</td><td>" + studentScores[i] + "</td><td>" + studentPercentages[i] + "%</td></tr>");
}
document.write("</table>");



// Qs 9
document.write("<h3> Qs 9 </h3>")
var colors = ["Red", "Green", "Blue"];
document.write("<h2>Original Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorToAddAtStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtStart);

document.write("<h4>Array after adding color to the beginning:</h4>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorToAddAtEnd = prompt("Enter a color to add to the end:");

colors.push(colorToAddAtEnd);

document.write("<h4>Array after adding color to the end:</h4>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.unshift("Purple", "Yellow");

document.write("<h4>Array after adding two more colors to the beginning:</h4>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.shift();

document.write("<h4>Array after deleting the first color:</h4>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.pop();

document.write("<h4>Array after deleting the last color:</h4>");
document.write("<p>" + colors.join(", ") + "</p>");

var positionToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAdd = prompt("Enter the color to add at that position:");

colors.splice(positionToAdd, 0, colorToAdd);

document.write("<h4>Array after adding a color at the specified position:</h4>");
document.write("<p>" + colors.join(", ") + "</p>");

var positionToDelete = parseInt(prompt("Enter the index to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));

colors.splice(positionToDelete, numberOfColorsToDelete);

document.write("<h4>Array after deleting color(s) at the specified position:</h4>");
document.write("<p>" + colors.join(", ") + "</p>");



// Qs 10
document.write('<h3>Qs 10 </h3>');
var studentScores = [85, 92, 78, 95, 88, 91];
studentScores.sort(function(a, b) {
    return a - b;
});
document.write("<h3>Qs 10</h3> <h4>Student Scores Sorted in Ascending Order:</h4>");
document.write("<p>" + studentScores.join(", ") + "</p>");



// Qs 11
document.write('<h3>Qs 11 </h3>');
var cities = ["karachi", "Gowadar", "Turbat", "Punjgor",];
var selectedCities = [];
selectedCities = cities.slice(0, 3);
document.write("Selected Cities: <br>");
document.write(selectedCities)
document.write("<br> <br>")

// Qs 12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.write("<h2>Qs 12</h2> <h4>Arry:</h4> This is my cat" + "<br> <br>")
document.write("<h3>string:</h3>" + singleString + "<br> <br>");



// Qs 13
document.write('<h3>Qs 13 </h3>');
var fifoArray = [];
fifoArray.push("keyborad");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("monitor");

var firstValue = fifoArray.shift(); // Removes and returns "Value 1"
var secondValue = fifoArray.shift(); // Removes and returns "Value 2"
var thirdValue = fifoArray.shift(); // Removes and returns "Value 3"
var forthValue = fifoArray.shift(); // Removes and returns "Value 4"

document.write("First Value:", firstValue + "<br>");
document.write("Second Value:", secondValue + "<br>");
document.write("Third Value:", thirdValue + "<br>");
document.write("forth Value:", forthValue + "<br>");



// Qs 14
document.write('<h3>Qs 14 </h3>');
var lifoArray = [];
lifoArray.push("keyborad");
lifoArray.push("mouse");
lifoArray.push("printer");
lifoArray.push("monitor");

var lastValue = lifoArray.pop(); // Removes and returns "Value 4"
var thirdValue = lifoArray.pop(); // Removes and returns "Value 3"
var secondLastValue = lifoArray.pop(); // Removes and returns "Value 2"
var firstValue = lifoArray.pop(); // Removes and returns "Value 1"

document.write("Last Value:", lastValue +'<br>');
document.write("Third Value:", thirdValue +'<br>');
document.write("Second Last Value:", secondLastValue +'<br>');
document.write("First Value:", firstValue +'<br>');
document.write('<br> <br>');



// Qs 15
document.write('<h3>Qs 15 </h3>');
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
function createDropdown() {
    document.write('<label for="manufacturer">Select a Manufacturer:</label>');
    document.write('<select id="manufacturer">');

    for (var i = 0; i < manufacturers.length; i++) {
        document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
    }
    document.write('</select>');
}
        createDropdown();
