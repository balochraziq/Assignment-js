// //   chapter | 17-20

// //  Qs 1

// var multiArray = [];
// multiArray.push([]);


// //  Qs 2
// document.write("<h3>Qs 2</h3>")
// var arr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 0, 2, 1],
// ];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     document.write(arr[i] + [] + "<br>");
//     break;


//   }
// }

// // Qs 3
// document.write("<h3>Qs 3</h3>")
// for (let i = 1; i <= 10; i++) {
//   document.write(i + '<br>');
// }

// // Qs 4
// document.write('<h3> Qs 4</h3>')
// var tableNumber = +prompt("Enter the table number:");
// var tableLength = +prompt("Enter the table length:");

// if (tableNumber * tableLength) {
//   document.write('Multiplication Table for' + tableNumber + ' Up to' + tableLength + '<br>')
//   for (var i = 1; i <= tableLength; i++) {
//     var result = tableNumber * i;
//     document.write(tableNumber + 'x ' + i + '=' + result + '<br>');
//   }
// } else {
//   document.write("Please enter valid numbers.");
// }

// Qs 5
// document.write("<h3>Qs 5</h3>")
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write("Element it index " + i + " is " + fruits[i] + '<br> <br>');
// }


// Qs 6

// a. Counting
// document.write("<h3> Qs 6 </h3> <h4> Counting: </h4>")
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ',')
// }

// Reversing Counting
// document.write("<h4> Reversing Counting:</h4>")
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ',');
// }

// Even
// document.write("<h4>Even:</h4>")
// for (var i = 0; i <= 20; i++) {
//   if ((i % 2 == 0)) {
//     document.write(i + ',')
//   }
// }

// Odd:
// document.write("<h4>Odd:</h4>")
// for (var i = 0; i <= 20; i++) {
//   if ((i % 2 != 0)) {
//     document.write(i + ',')
//   }
// }

// Series:
// document.write("<h4>Series:</h4>")
// for (var i = 1; i <= 10; i++) {
//   var num = i * 2; {
//     document.write(num + 'K,' + '')
//   }
// }
// let city = "karachi" 
// console.log(city(""))
// let cityChar = city.slice(0,1)
// document.write(cityChar)
// for(var i = 1 ; i <= 100; i++){
//   console.log(cityChar)
// } 
// console.log(nameIamge.length)
// // let NAMEIAMGE = 
// var apr = `a` 
// if(apr == "a"){                                                 
//   console.log(apr)

// }

let war = "World War II"
for (var i = 0; i < war.length; i++) {
  if (war.slice(i, i + 12) == "World War II"){
    war = war.slice(0,i) + "the Second World War" + war.slice(0,i)
  }
}
document.write(war.lastIndexOf("r"))



// Qs 7
// var A = ["cake", "apple", "pie", "cookie", "chips", "patties"]
// var userInput = prompt("Enter an item to search:");
// if (A.includes(userInput)) {
// for (var i = 0; i <= A.length; i++)
//     alert(userInput + " is avalibale at index " + [i] + " in our bakery");
//   } else {
//     alert("We are sorry. pastry is not ailvable in our bakery");
//   }





// Qs 8
// document.write("<h3>Qs 8</h3>")
// var A = [24, 53, 78, 91, 12];
// for (var i = 1; i < A.length; i++) {
//   if (91 == A[i]) {
//     document.write("The largest target number is " + A[i]);
//   }
// }
// // Qs 9
// document.write("<h3>Qs 9</h3>")
// var A = [24, 53, 78, 91, 12];
// for (var i = 1; i < A.length; i++) {
//   if (12 == A[i]) {
//     document.write("The summallest target number is " + A[i]);
//   }
// }


// // Qs 10
// document.write("<h3>Qs 10</h3>")
// for (var i = 1; i <= 20; i++) {
//   var num = i * 5; {
//     document.write(num + ' ')
//   }
// }
