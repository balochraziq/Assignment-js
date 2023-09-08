// chapter #5
//  Qs 1
document.write("<h2>Qs.1</h2>")
var num1 = 3 + 5;
document.write("Sume og 3 and 5 is: " + num1)
document.write("<br><br> <br>")


// QS 2
document.write("<h2>Qs.2</h2>")
let num2 = 3 - 5
document.write("subtraction: " + num2)
document.write("<br> <br>")

let num3 = 3 * 5
document.write("multiplication: " + num3)
document.write("<br> <br>")

let num4 = 3 / 5
document.write("division: " + num4)
document.write("<br> <br>")

let num5 = 5 % 3
document.write("modulus: " + num5)
document.write("<br> <br> <br>")

// Qs 3
document.write("<h2>Qs.3</h2>")

var newValue;
document.write("Value after variable declaration is: " + newValue)
document.write("<br> <br>")


newValue = 5;
document.write("Initial value: " + newValue)
document.write("<br> <br>")

newValue++;
document.write("Value after increment is: " + newValue)
document.write("<br> <br> ")


newValue = newValue + 7;
document.write("value after addition is: " + newValue)
document.write("<br> <br>")

newValue--;
document.write("Value after decrement is: " + newValue)
document.write("<br> <br>")

newValue = newValue % 3;
document.write("The remainder is : " + newValue)
document.write("<br> <br> <br>")


// Qs 4 
document.write("<h2>Qs.4</h2>")
var cost = 600
var totalCost = cost * 5;
document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + "PKR")
document.write("<br> <br>")


// 5

document.write("<h2>Qs.5</h2>")
document.write("<h3>Table of 4;</h3>")

var table = 4 * 1
document.write("4x1= " + table + "<br>")
var table = 4 * 2
document.write("4x2= " + table + "<br>")
var table = 4 * 3
document.write("4x3= " + table + "<br>")
var table = 4 * 4
document.write("4x4= " + table + "<br>")
var table = 4 * 5
document.write("4x5= " + table + "<br>")
var table = 4 * 6
document.write("4x6= " + table + "<br>")
var table = 4 * 7
document.write("4x7= " + table + "<br>")
var table = 4 * 8
document.write("4x8= " + table + "<br>")
var table = 4 * 9
document.write("4x9= " + table + "<br>")
var table = 4 * 10
document.write("4x10= " + table + "<br>")


// 06
document.write("<h2>Qs.6</h2>")
document.write("<h3>The Temperature Converter: </h3>")
var celsius = 25
var fahrenheit = 70
var farmola1 = (celsius * 9 / 5) + 32;
var farmola = (fahrenheit - 32) * 5 / 9;
document.write(celsius + "°C is " + farmola1 + " °F" + "<br>")
document.write(fahrenheit + " °F is " + farmola + " °C" + "<br>")




// Qs 7

document.write("<h2>Qs.7</h2>")
document.write("<h3>Shopping Cart:</h3>")

var item1 = 650;
var ordertem1 = 3;
var OT1 = item1 * ordertem1
var item2 = 100;
var Orderitem2 = 7
var OT2 = item2 * Orderitem2
var Ot3 = OT1 + OT2
var shiping = 100
var Total = Ot3 + shiping;
document.write("Total cost of your order is " + Total)
document.write("<br> <br>")


//  Qs 8
document.write("<h2>Qs.8</h2>")
document.write("<h3>Marks Sheet:</h3>")

var total_marks = 980;
var marks_obtained = 804
var percentage = (marks_obtained / total_marks) * 100;
document.write("percentage:" + percentage)
document.write("<br> <br>")

//  Qs 9
document.write("<h2>Qs.9</h2> ")
document.write("<h3>Currnecy in PKR:</h3>")

var usdtopkr = 307.17
var surtopkr = 81.98
usdtopkr = 10 * 307.17
surtopkr = 25 * 81.98
var Total_pkr = usdtopkr + surtopkr
document.write("Total currency in PKR: " + Total_pkr)
document.write("<br> <br>")

//  Qs 10
document.write("<h2>Qs.10</h2>")
document.write("<h3>Calculations:</h3>")

var number = (20 + 5) * 10 / 2;
document.write(" result by: " + number)
document.write("<br> <br> <br>")

//  Qs 11
document.write("<h2>Qs.11</h2>")
document.write("<h3>Age Calculator: </h3>")

var currentYear = 2023
var birthYear = 1998
var fstGest = currentYear - birthYear
var oldYear = (currentYear + birthYear) % fstGest
document.write("“They are either " + oldYear + "or " + fstGest + "years old”.")
document.write("<br> <br> <br>")


// //  Qs 12 

// var radius = (20 * 2) * 3.142
// console.log(radius)


// Qs 13
document.write("<h2>Qs.13</h2>")
document.write("<h3>lifetime supply:</h3>")

var current_age = 25
var max_age = 80
var amount_s_day = 3
var lifetime_supply = (max_age - current_age) * amount_s_day
document.write("You will need Bscit " + lifetime_supply + " to last you until the ripe old age of " + max_age)


