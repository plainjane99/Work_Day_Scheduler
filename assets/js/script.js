// Global Variables Go Here
var currentDay = moment();
var currentHour = currentDay.hours();

// displays current date to header
$('#currentDay').text(function() {
    var currentDate = currentDay.format('dddd, MMMM DD, YYYY');
    return currentDate.toString();
});

// saves user input - need to figure out how to build one function for all time blocks
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

// saves 8AM data
$('#eightAmButton').on("click", function() {
    var eventInput8Am = $("#eightAmEvent").val();

    function saveEvents() {
        localStorage.setItem("eightAm", JSON.stringify(eventInput8Am));
    }
    saveEvents(eventInput8Am);
})

// saves 9AM data
$('#nineAmButton').on("click", function() {
    var eventInput9Am = $("#nineAmEvent").val();

    function saveEvents() {
        localStorage.setItem("nineAm", JSON.stringify(eventInput9Am));
    }
    saveEvents(eventInput9Am);
})

// saves 10AM data
$('#tenAmButton').on("click", function() {
    var eventInput10Am = $("#tenAmEvent").val();

    function saveEvents() {
        localStorage.setItem("tenAm", JSON.stringify(eventInput10Am));
    }
    saveEvents(eventInput10Am);
})

// saves 11AM data
$('#elevenAmButton').on("click", function() {
    var eventInput11Am = $("#elevenAmEvent").val();

    function saveEvents() {
        localStorage.setItem("elevenAm", JSON.stringify(eventInput11Am));
    }
    saveEvents(eventInput11Am);
})

// saves 12PM data
$('#twelvePmButton').on("click", function() {
    var eventInput12Pm = $("#twelvePmEvent").val();

    function saveEvents() {
        localStorage.setItem("twelvePm", JSON.stringify(eventInput12Pm));
    }
    saveEvents(eventInput12Pm);
})

// saves 1PM data
$('#onePmButton').on("click", function() {
    var eventInput1Pm = $("#onePmEvent").val();

    function saveEvents() {
        localStorage.setItem("onePm", JSON.stringify(eventInput1Pm));
    }
    saveEvents(eventInput1Pm);
})









// audits the time
// audits 6AM time block
function audit6Am() {

//     // creates an "hour" attribute for the current Hour
//     // var currentHourId = $("#currentDay").attr("hour", currentHour);
//     // console.log(currentHourId);

//     // gets value of hour attribute
    var timeBlockHourId = $("#timeBlock6Am").attr("hour");
//     // console.log(timeBlockHourId);
//     // console.log(typeof timeBlockHourId);
    var timeBlockHourInt = parseInt(timeBlockHourId);
//     // console.log(typeof timeBlockHourInt);

    if (timeBlockHourInt < currentHour) {
        // console.log("time block is less than current time of " + currentHour + " hundred hours.");
        $("#sixAmEvent").addClass("past");
    }
    else if (timeBlockHourInt = currentHour) {
        $("#sixAmEvent").addClass("present");
    }
    else {
        $("#sixAmEvent").addClass("future");
    }

};

// audits 7AM time block
function audit7Am() {
    var timeBlockHourId = $("#timeBlock7Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#sevenAmEvent").addClass("past");
    }
    else if (timeBlockHourInt = currentHour) {
        $("#sevenAmEvent").addClass("present");
    }
    else {
        $("#sevenAmEvent").addClass("future");
    }
}

// audits 8AM time block
function audit8Am() {
    var timeBlockHourId = $("#timeBlock8Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#eightAmEvent").addClass("past");
    }
    else if (timeBlockHourInt = currentHour) {
        $("#eightAmEvent").addClass("present");
    }
    else {
        $("#eightAmEvent").addClass("future");
    }
}

// load previous data from local storage
$().ready(function() {

    function loadEvents() {

        // gets items from local storage by name
        var getSixAm = JSON.parse(localStorage.getItem("sixAm"));
        // audits items for past, present, future
        audit6Am();

        var getSevenAm = JSON.parse(localStorage.getItem("sevenAm"));
        audit7Am();

        var getEightAm = JSON.parse(localStorage.getItem("eightAm"));
        audit8Am();


        // displays to page
        $("#sixAmEvent").val(getSixAm);
        $("#sevenAmEvent").val(getSevenAm);
        $("#eightAmEvent").val(getEightAm);
    }

    loadEvents();
})

