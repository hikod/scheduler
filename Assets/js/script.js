var today = new Date();
// Convert the `randomDate` to the "MM/DD/YYYY" format using `moment()`
var randomFormat = 'MM/DD/YYYY';
var convertedDate = moment(today, randomFormat);

var currentDay = document.getElementById("currentDay");
currentDay.textContent = convertedDate.format('dddd, MMMM Do');