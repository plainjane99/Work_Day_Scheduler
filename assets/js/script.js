// Global Variables Go Here

// display current date
$('#currentDay').text(function() {
    var currentDate = moment().format('dddd, MMMM DD, YYYY');
    return currentDate.toString();
});

// save user input
// saves 6AM data
$('#sixAmButton').on("click", function() {
    var eventInput6Am = $("#sixAmEvent").val();

    function saveEvents() {
        localStorage.setItem("sixAm", JSON.stringify(eventInput6Am));
    }
    saveEvents(eventInput6Am);
})

// saves 7AM data
$('#sevenAmButton').on("click", function() {
    var eventInput7Am = $("#sevenAmEvent").val();

    function saveEvents() {
        localStorage.setItem("sevenAm", JSON.stringify(eventInput7Am));
    }
    saveEvents(eventInput7Am);
})

// audits the time

function auditTime(eventHour) {

    // tags 'currentDay' ID with an "hour" attribute
    // gets the hour of the current time
    var currentHour = new Date().getHours();
    // console.log("It's " + currentHour + " hundred hours.");
    console.log(currentHour);
    console.log(typeof currentHour);

    // creates an "hour" attribute for the current Hour
    // var currentHourId = $("#currentDay").attr("hour", currentHour);
    // console.log(currentHourId);

    // gets value of hour attribute
    var timeBlockHourId = $("#timeBlock6Am").attr("hour");
    console.log(timeBlockHourId);
    console.log(typeof timeBlockHourId);
    var timeBlockHourInt = parseInt(timeBlockHourId);
    console.log(typeof timeBlockHourInt);

    if (timeBlockHourInt < currentHour) {
        console.log("time block is less than current time of " + currentHour + " hundred hours.");
        $("#sixAmEvent").addClass("past");
    }
    else if (timeBlockHourInt = currentHour) {
        $("#sixAmEvent").addClass("present");
    }
    else {
        $("#sixAmEvent").addClass("future");
    }

};

// load previous data from local storage
$().ready(function() {

    function loadEvents() {

        // gets items from local storage by name
        var getSixAm = JSON.parse(localStorage.getItem("sixAm"));
        // audits items for past, present, future
        // auditTime(getSixAm);

        var getSevenAm = JSON.parse(localStorage.getItem("sevenAm"));


        // displays to page
        $("#sixAmEvent").val(getSixAm);
        $("#sevenAmEvent").val(getSevenAm);

    }

    loadEvents();
})

