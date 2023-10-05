// Ch#30-34
// QS1
var currentDate = new Date();
var dateTimeString = currentDate.toLocaleString();
alert(`thu oct ` + dateTimeString + ` GMT+0500(PKT)`)




// Qs2
var date = new Date();
var month = date.getMonth();
var arr = [
    "January",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
alert(`current month: ` + arr[month]);



// Qs3
var date = new Date();
var day = date.getDay();
var array = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];
alert(`Today is `+array[day]);



// Qs4
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();
if (dayOfWeek === 6 || dayOfWeek === 0) {
    alert("It's Fun day");
} else {
    alert("It's not Fun day");
}




// Qs5
var currentDate = new Date();
var dayOfMonth = currentDate.getDate();
if (dayOfMonth <= 15) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}




// Qs6
// var date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());




// Qs7
const currentDate = new Date();
const currentHour = currentDate.getHours();
if (currentHour > 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}




// Qs8
var lastDayOf2020 = new Date(2020, 11, 31);
var laterDate = lastDayOf2020;

alert(laterDate);




// Qs9
var ramadanStartDate = new Date(2015, 5, 18);
var currentDate1 = new Date();
var timeDifference = currentDate - ramadanStartDate;
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert(`Number of days passed since 1st Ramadan: ` + daysPassed);


