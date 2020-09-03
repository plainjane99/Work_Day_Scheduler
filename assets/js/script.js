// Global Variables Go Here
var todayEl = document.getElementById('currentDay');

var currentDateDiv = $("<div>").addClass("currentDay");
currentDateDiv = moment().format('dddd, MMMM DD, YYYY');
todayEl.append(currentDateDiv);

// create event
