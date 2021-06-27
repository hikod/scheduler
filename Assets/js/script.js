var today = new Date();
// Convert the `randomDate` to the "MM/DD/YYYY" format using `moment()`
var randomFormat = 'MM/DD/YYYY';
var convertedDate = moment(today, randomFormat);

var currentDay = document.getElementById("currentDay");
currentDay.textContent = convertedDate.format('dddd, MMMM Do');

var textBoxes = document.getElementsByTagName("input");
var saveButtons = document.querySelectorAll(".fa-save");
saveButtons.forEach(saveButton => saveButton.addEventListener("click", function () {

    for (let index = 0; index < textBoxes.length; index++) {
        if (textBoxes[index].value !== null || textBoxes[index].value !== '') {
            window.localStorage.setItem(['textBox' + index], textBoxes[index].value);
        }
    }
}));

if(typeof(Storage) !== "undefined") {
    for (let index = 0; index < textBoxes.length; index++) {
        textBoxes[index].value = window.localStorage.getItem(['textBox' + index]);
    }
} else {
    console.info("This page is not reloaded");
}
