

let dateToday = document.getElementById("date-today");


var currentDate = new Date();
var month = currentDate.getMonth();
var date = currentDate.getDate();
var year = currentDate.getFullYear();
var day = currentDate.getDay();



var monthList = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
var dayList = ["SUN","MON","TUE","WED","THU","FRI","SAT"]





dateToday.innerHTML = dayList[day] + "  " + date + "  " + monthList[month]

