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

// saves 2PM data
$('#twoPmButton').on("click", function() {
    var eventInput2Pm = $("#twoPmEvent").val();

    function saveEvents() {
        localStorage.setItem("twoPm", JSON.stringify(eventInput2Pm));
    }
    saveEvents(eventInput2Pm);
})

// saves 3PM data
$('#threePmButton').on("click", function() {
    var eventInput3Pm = $("#threePmEvent").val();

    function saveEvents() {
        localStorage.setItem("threePm", JSON.stringify(eventInput3Pm));
    }
    saveEvents(eventInput3Pm);
})

// saves 4PM data
$('#fourPmButton').on("click", function() {
    var eventInput4Pm = $("#fourPmEvent").val();

    function saveEvents() {
        localStorage.setItem("fourPm", JSON.stringify(eventInput4Pm));
    }
    saveEvents(eventInput4Pm);
})

// saves 5PM data
$('#fivePmButton').on("click", function() {
    var eventInput5Pm = $("#fivePmEvent").val();

    function saveEvents() {
        localStorage.setItem("fivePm", JSON.stringify(eventInput5Pm));
    }
    saveEvents(eventInput5Pm);
})

// audits the timeblock for past, present, future
// audits 6AM time block
function audit6Am() {
    // gets value of hour attribute
    var timeBlockHourId = $("#timeBlock6Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#sixAmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#sixAmEvent").addClass("future");
    }
    else {
        $("#sixAmEvent").addClass("present");
    }
};

// audits 7AM time block
function audit7Am() {
    var timeBlockHourId = $("#timeBlock7Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#sevenAmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#sevenAmEvent").addClass("future");
    }
    else {
        $("#sevenAmEvent").addClass("present");
    }
};

// audits 8AM time block
function audit8Am() {
    var timeBlockHourId = $("#timeBlock8Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#eightAmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#eightAmEvent").addClass("future");
    }
    else {
        $("#eightAmEvent").addClass("present");
    }
};

// audits 9AM time block
function audit9Am() {
    var timeBlockHourId = $("#timeBlock9Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#nineAmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#nineAmEvent").addClass("future");
    }
    else {
        $("#nineAmEvent").addClass("present");
    }
};

// audits 10AM time block
function audit10Am() {
    var timeBlockHourId = $("#timeBlock10Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#tenAmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#tenAmEvent").addClass("future");
    }
    else {
        $("#tenAmEvent").addClass("present");
    }
};

// audits 11AM time block
function audit11Am() {
    var timeBlockHourId = $("#timeBlock11Am").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#elevenAmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#elevenAmEvent").addClass("future");
    }
    else {
        $("#elevenAmEvent").addClass("present");
    }
};

// audits 12PM time block
function audit12Pm() {
    var timeBlockHourId = $("#timeBlock12Pm").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#twelvePmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#twelvePmEvent").addClass("future");
    }
    else {
        $("#twelvePmEvent").addClass("present");
    }
};

// audits 1PM time block
function audit1Pm() {
    var timeBlockHourId = $("#timeBlock1Pm").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#onePmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#onePmEvent").addClass("future");
    }
    else {
        $("#onePmEvent").addClass("present");
    }
};

// audits 2PM time block
function audit2Pm() {
    var timeBlockHourId = $("#timeBlock2Pm").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#twoPmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#twoPmEvent").addClass("future");
    }
    else {
        $("#twoPmEvent").addClass("present");
    }
};

// audits 3PM time block
function audit3Pm(currentHour) {
    var timeBlockHourId = $("#timeBlock3Pm").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#threePmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#threePmEvent").addClass("future");
    }
    else {
        $("#threePmEvent").addClass("present");
    }
};

// audits 4PM time block
function audit4Pm() {
    var timeBlockHourId = $("#timeBlock4Pm").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#fourPmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#fourPmEvent").addClass("future");
    }
    else {
        $("#fourPmEvent").addClass("present");
    }
};

// audits 5PM time block
function audit5Pm() {
    var timeBlockHourId = $("#timeBlock5Pm").attr("hour");
    var timeBlockHourInt = parseInt(timeBlockHourId);

    if (timeBlockHourInt < currentHour) {
        $("#fivePmEvent").addClass("past");
    }
    else if (timeBlockHourInt > currentHour) {
        $("#fivePmEvent").addClass("future");
    }
    else {
        $("#fivePmEvent").addClass("present");
    }
};

function loadEvents() {

    // gets items from local storage by name
    var getSixAm = JSON.parse(localStorage.getItem("sixAm"));
    // audits items for past, present, future
    audit6Am();

    var getSevenAm = JSON.parse(localStorage.getItem("sevenAm"));
    audit7Am();

    var getEightAm = JSON.parse(localStorage.getItem("eightAm"));
    audit8Am();

    var getNineAm = JSON.parse(localStorage.getItem("nineAm"));
    audit9Am();

    var getTenAm = JSON.parse(localStorage.getItem("tenAm"));
    audit10Am();

    var getElevenAm = JSON.parse(localStorage.getItem("elevenAm"));
    audit11Am();

    var getTwelvePm = JSON.parse(localStorage.getItem("twelvePm"));
    audit12Pm();

    var getOnePm = JSON.parse(localStorage.getItem("onePm"));
    audit1Pm();

    var getTwoPm = JSON.parse(localStorage.getItem("twoPm"));
    audit2Pm();

    var getThreePm = JSON.parse(localStorage.getItem("threePm"));
    audit3Pm(currentHour);

    var getFourPm = JSON.parse(localStorage.getItem("fourPm"));
    audit4Pm();

    var getFivePm = JSON.parse(localStorage.getItem("fivePm"));
    audit5Pm();

    // displays to page
    $("#sixAmEvent").val(getSixAm);
    $("#sevenAmEvent").val(getSevenAm);
    $("#eightAmEvent").val(getEightAm);
    $("#nineAmEvent").val(getNineAm);
    $("#tenAmEvent").val(getTenAm);
    $("#elevenAmEvent").val(getElevenAm);
    $("#twelvePmEvent").val(getTwelvePm);
    $("#onePmEvent").val(getOnePm);
    $("#twoPmEvent").val(getTwoPm);
    $("#threePmEvent").val(getThreePm);
    $("#fourPmEvent").val(getFourPm);
    $("#fivePmEvent").val(getFivePm);
};

// load previous data from local storage
$().ready(function() {
    loadEvents();
})

setInterval(function() {
    loadEvents();
},60000);
