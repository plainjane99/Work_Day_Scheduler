// Global Variables Go Here
var todayEl = document.getElementById('currentDay');

// get current date
var currentDateEl = document.createElement("div");
currentDateEl = moment().format('dddd, MMMM DD, YYYY');
todayEl.append(currentDateEl);